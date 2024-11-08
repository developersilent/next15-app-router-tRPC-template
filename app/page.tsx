"use client"

import {clientApi} from "@/server/trpc/client.api";
// import {serverApi} from "@/server/trpc/server.api";

//
// const server_call = async () => {
//     return await serverApi.TEST.hello();
// }

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
