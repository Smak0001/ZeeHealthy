import { createClient } from "@supabase/supabase-js";
import dotenv from "dotenv";
dotenv.config(); // Load environment variables from .env file

// Initialize Supabase client
const supabase = createClient(
  process.env.PUBLIC_SUPABASE_URL,
  process.env.PUBLIC_SUPABASE_ANON_KEY
);

const getAllEventData = async (req, res) => {
    try {
        // Fetch all events from Supabase
        const { data, error } = await supabase
          .from("events")
          .select("*")
          .order("id");
    
        if (error) {
          throw error;
        }
    
        res.json(data);
      } catch (error) {
        console.error("Error fetching events from Supabase table:", error);
        res.status(500).json({ error: "Internal Server Error" });
      }
};

const deleteEvent = async (req, res) => {
    const id = req.params.id;
  
    try {
      const result = await supabase.from("events").delete().eq("id", id);
      console.log(result);
      res.status(200).json({ message: "Event deleted successfully" });
    } catch (error) {
      console.error("Error deleting event from Supabase table:", error.message);
      res.status(500).json({ error: "Internal Server Error" });
    }
  };

const createEvent = async (req, res) => {
    const {id, event_name, event_location, attendees, description, phone_number, event_date } = req.body;
    const newEvent = {
        id, 
        event_name, 
        event_location, 
        attendees, 
        description, 
        phone_number, 
        event_date,
    };

    try {
        const { data, error } = await supabase.from("events").insert([newEvent]);

        if (error) {
            throw error;
        }

        res.status(201).json(newEvent);
    } catch (error) {
        console.error("Error creating event in supabase table:", error);
        res.status(500).json({ error: "Internal server error" });
    }
};

export {
    getAllEventData,
    deleteEvent,
    createEvent,
};