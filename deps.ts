// @ts-nocheck
// Standard library dependencies
export * as log from 'https://deno.land/std@0.62.0/log/mod.ts';

// Third party dependencies
export {
   Application,
   send,
   Router
} from 'https://deno.land/x/oak@v5.0.0/mod.ts';

// Currently only works with Deno Version 1.1.3
// Deno upgrade --version 1.1.3