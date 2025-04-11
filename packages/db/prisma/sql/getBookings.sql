SELECT b.ticket_code, b.date, b.status
       
FROM "bookings" b
-- Return bookings with code matching $1 if this is passed, otherwise all bookings
WHERE (b.ticket_code = $1 OR $1 IS NULL)
  AND (b.date >= TO_DATE($2, 'YYYY-MM-DD') OR $2 IS NULL)
  AND (b.date <= TO_DATE($3, 'YYYY-MM-DD') OR $3 IS NULL)
  AND (b.status = $4 OR $4 IS NULL)
  AND (b.activity_allocation_code = $5 OR $5 IS NULL)
