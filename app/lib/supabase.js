// import { createClient } from '@supabase/supabase-js';

import { createClientComponentClient } from "@supabase/auth-helpers-nextjs";

export const supabase = createClientComponentClient({ supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL, supabaseKey: process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY })

export const supabaseAdmin = createClientComponentClient({ supabaseUrl: process.env.NEXT_PUBLIC_SUPABASE_URL, supabaseKey: process.env.NEXT_PUBLIC_SERVICE_ROLE_KEY })

// When you work with session system, you have to maket he client component from the same package
// client/backend side use the same middlware. 