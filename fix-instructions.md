# Fix for Absence Entry Time Issue

This document contains instructions to fix the issue where absence entries are always setting times to 00:00 even when there are existing time entries.

## The Problem

When updating an existing time entry with absence information, the frontend was sending a request with all time fields set to 00:00, which would overwrite the existing time values. This was causing issues when you wanted to add an absence to an entry that already had time data.

## The Solution

1. I've created a helper function `handleAbsenceUpdate` in `src/lib/absenceHelper.js` that properly handles absence updates by:
   - Fetching the existing entry first
   - Using the existing time values in the update request
   - Only updating the absence minutes and comment fields

2. To implement this fix:

   a. First, in your TimeRoute.jsx file, add the following import at the top:
   ```javascript
   import { handleAbsenceUpdate } from "../lib/absenceHelper.js";
   ```

   b. Then, replace the existing code for handling absence updates (around line 275-320) with:
   ```javascript
   if (timeEntry.isAbsence) {
       try {
           console.log("Processing absence entry:", timeEntry);
           
           // Calculate absence minutes
           const absenceMinutes = timeEntry.absenceMinutes ? 
               Number(timeEntry.absenceMinutes) : 
               timeEntry.absenceUnit === 'days' 
                   ? Number(timeEntry.absenceDuration) * TARGET_MINUTES 
                   : Number(timeEntry.absenceHours) * 60;
           
           let result;
           
           if (timeEntry.id) {
               // For updating existing entries with absence
               result = await handleAbsenceUpdate(timeEntry, session, absenceMinutes);
               
               if (!result.success) {
                   return result.error;
               }
           } else {
               // For new absences, use the specialized /times/absence endpoint
               const absenceData = {
                   studentId: parseInt(timeEntry.studentId),
                   date: timeEntry.date,
                   absenceType: timeEntry.absenceType,
                   durationHours: timeEntry.absenceUnit === 'days' ? 8 : Number(timeEntry.absenceHours) || 1
               };
               
               console.log(`Creating new absence: ${absenceData.durationHours} hours`);
               
               const response = await fetch('http://localhost:8080/times/absence', {
                   method: 'POST',
                   headers: {
                       "Content-Type": "application/json",
                       "Authorization": `Bearer ${session.token}`
                   },
                   body: JSON.stringify(absenceData)
               });
               
               if (!response.ok) {
                   let errorMessage = "Abwesenheit konnte nicht gespeichert werden";
                   try {
                       const errorData = await response.json();
                       console.error('Server error response for absence:', errorData);
                       if (errorData.date) {
                           return { date: errorData.date };
                       }
                       errorMessage = errorData.message || errorMessage;
                   } catch (e) {
                       console.error('Error parsing server response for absence:', e);
                   }
                   return { _error: errorMessage };
               }
           }
           
           return redirect("/time");
       } catch (error) {
           console.error('Error saving absence entry:', error);
           return { _error: "Abwesenheit konnte nicht gespeichert werden" };
       }
   }
   ```

3. Once these changes are made, rebuild and restart your application.

This solution will ensure that when updating an existing time entry with absence information, the existing time values are preserved rather than being overwritten with zeros.
