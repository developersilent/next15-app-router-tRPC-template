// import {serverApi} from "@/server/trpc/server.api";
//
// export default async function Home() {
//   const res = await serverApi.TEST.hello();
//     console.log("server api")
//   return (
//       <>
//         <h2>
//           {res.message}
//         </h2>
//       </>
//   );
// }



"use client" // only for client-side code

import {clientApi} from "@/server/trpc/client.api";
export default function Home() {
  const res = clientApi.TEST.hello.useQuery();
  return (
    <>
    <h2>
      {res.isLoading && (
          <p>Loading...</p>
      )}
      {res.data?.message}
    </h2>
    </>
  );
}
