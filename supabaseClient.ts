import { createClient } from '@supabase/supabase-js'

const supabaseUrl = 'https://jqfnxhylrltlfvzupjrg.supabase.co'
const supabaseAnonKey = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImpxZm54aHlscmx0bGZ2enVwanJnIiwicm9sZSI6ImFub24iLCJpYXQiOjE3NDU0MzYzNjMsImV4cCI6MjA2MTAxMjM2M30.oub_KHVkzltiO5D-MX1hxu191xTjl5FHTlu56_6IRs0'

export const supabase = createClient(supabaseUrl, supabaseAnonKey)
