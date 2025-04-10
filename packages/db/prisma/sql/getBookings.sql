SELECT *
FROM "bookings" b
-- Return bookings with code matching $1 if this is passed, otherwise all bookings
WHERE (b.ticket_code = $1 OR $1 IS NULL)
  AND (b.date >= $2 OR $2 IS NULL)
  AND (b.date <= $3 OR $3 IS NULL)
