import { createClient } from "@supabase/supabase-js";


//I will keep them here instead in env since the supabase project I created is only a minor test project anyways
export const supabase = createClient("https://cwjmbrtttqadagrcrgmr.supabase.co",
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImN3am1icnR0dHFhZGFncmNyZ21yIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NTExODUzNDYsImV4cCI6MjA2Njc2MTM0Nn0.D4g8oYiFmtI8LkrL5dnLqRfYJ0sIBGnQ14R7tR9XM1g"
);

