import supabaseClient from "@/utils/supabase";

export async function getJobs(token,{location,company_id,searchQuery}){
   const supabse = await supabaseClient(token);

   let query = supabse.from("jobs").select("*, company:companies(name,logo_url), saved:saved_jobs(id)")

   if(location){
    query = query.eq("location",location)
   }

   if(company_id){
    query = query.eq("company_id",company_id)
   }

   if(searchQuery){
    query = query.ilike("title", `%${searchQuery}%`)
   }

   
   const { data, error } = await query;

   if (error) {
     console.error("Error fetching Jobs:", error);
     return null;
   }
 
   return data;

}