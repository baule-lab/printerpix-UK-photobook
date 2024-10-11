import { component$ } from "@builder.io/qwik";
import { CalendarLayout } from "~/components/calendar/CalendarLayout";
 
export default component$(() => {
  return (
   <CalendarLayout/>
  );
});

// export const head: DocumentHead = {
//   title: "Welcome to Qwik",
//   meta: [
//     {
//       name: "description",
//       content: "Qwik site description",
//     },
//   ],
// };
