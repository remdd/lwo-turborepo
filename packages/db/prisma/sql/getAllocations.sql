-- Returns number of daily allocations for date range 

SELECT b.allocation, b.date
       
FROM "bookings" b

WHERE (b.activity_allocation_code = $1)
  AND b.date >= TO_DATE($2, 'YYYY-MM-DD')
  AND b.date <= TO_DATE($3, 'YYYY-MM-DD')
  AND b.status = 'CONFIRMED'
