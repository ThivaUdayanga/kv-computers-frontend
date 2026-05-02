export default function getFormattedDiscount(labelPrice, productPrice){
    if (!labelPrice || labelPrice <= productPrice) {
      return 0;
    }

    return Math.round(((labelPrice - productPrice) / labelPrice) * 100);
}

//https://wtqwmcunkasxozhzycom.supabase.co/rest/v1/

//eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Ind0cXdtY3Vua2FzeG96aHp5Y29tIiwicm9sZSI6ImFub24iLCJpYXQiOjE3Nzc1NzY5NzYsImV4cCI6MjA5MzE1Mjk3Nn0.vfTPAPvXQABnS1aHxtNJtRcH9mFsy1em9BDb7FdKDsY