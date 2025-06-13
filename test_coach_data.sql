-- Test Coach Data SQL Script
-- Insert test coaches into the database

-- First, let's make sure we're working with the correct database
USE buzztrip;

-- First insert into user table (username, email, password, role)
INSERT INTO user (username, email, password, role) VALUES
  ('john.smith', 'john.smith@example.com', '$2a$10$RD7wKrOOdS.pFqk9aCiQFuTMO.GtaPgEFJvtCMjNw8KLvvT0NzMsS', 'COACH'),
  ('maria.mueller', 'maria.mueller@example.com', '$2a$10$RD7wKrOOdS.pFqk9aCiQFuTMO.GtaPgEFJvtCMjNw8KLvvT0NzMsS', 'COACH'),
  ('thomas.weber', 'thomas.weber@example.com', '$2a$10$RD7wKrOOdS.pFqk9aCiQFuTMO.GtaPgEFJvtCMjNw8KLvvT0NzMsS', 'COACH'),
  ('anna.schmidt', 'anna.schmidt@example.com', '$2a$10$RD7wKrOOdS.pFqk9aCiQFuTMO.GtaPgEFJvtCMjNw8KLvvT0NzMsS', 'COACH'),
  ('michael.fischer', 'michael.fischer@example.com', '$2a$10$RD7wKrOOdS.pFqk9aCiQFuTMO.GtaPgEFJvtCMjNw8KLvvT0NzMsS', 'COACH');

-- Then insert into coach table with references to user_id
INSERT INTO coach (birthdate, city, phone, specialization, team, user_id)
SELECT '1985-05-15', 'Berlin', '+49123456789', 'Fitness', 'Team A', id FROM user WHERE username = 'john.smith';

INSERT INTO coach (birthdate, city, phone, specialization, team, user_id)
SELECT '1990-08-22', 'Hamburg', '+49987654321', 'Nutrition', 'Team B', id FROM user WHERE username = 'maria.mueller';

INSERT INTO coach (birthdate, city, phone, specialization, team, user_id)
SELECT '1982-03-10', 'Munich', '+49456789123', 'Rehabilitation', 'Team C', id FROM user WHERE username = 'thomas.weber';

INSERT INTO coach (birthdate, city, phone, specialization, team, user_id)
SELECT '1988-11-28', 'Frankfurt', '+49321654987', 'Mental Health', 'Team A', id FROM user WHERE username = 'anna.schmidt';

INSERT INTO coach (birthdate, city, phone, specialization, team, user_id)
SELECT '1979-07-03', 'Cologne', '+49789123456', 'Physiotherapy', 'Team B', id FROM user WHERE username = 'michael.fischer';

-- Display the inserted data
SELECT u.id, u.username, u.email, c.birthdate, c.city, c.phone, c.specialization, c.team
FROM user u
JOIN coach c ON u.id = c.user_id
WHERE u.role = 'COACH';
