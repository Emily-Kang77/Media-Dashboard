// 'use client';

// import { useRouter } from "next/navigation";
// import { supabase } from "../lib/supabase";
// import { useState } from "react";
// import { headers } from "next/headers";

// export default function Login() {

//   const [data, setData] = useState<{
//     email: string,
//     password: string
//   }>({
//     email: '',
//     password: ''
//   })

//   const router = useRouter();
//   const origin = headers().get('origin')

//   const login = async() => {
//     try {
//       const { error, data } = await supabase.auth.signInWithOAuth({
//         provider: 'google',
//       })
//     } catch (error) {
//       console.log(error)
//     }
//   }

//   const loginManual = async() => {
//     try {
//       const { error, data: dataUser } = await supabase.auth.signInWithPassword({
//         email: data.email,
//         password: data.password,
//         options: {
//           redirectTo: `${origin}`
//         }
//       })

//       if (data) console.log(data)
      
//       // NextjS 13+ and app router
//       if (dataUser) {
//         router.refresh();
//       }

//     } catch (error) {
//       console.log(error)
//     }
//   }

//   // const [email, setEmail] = useState('');
//   // const [password, setPassword] = useState('');
//   // const [error, setError] = useState(null);

//   const handleChange = (e: any) => {
//     const { name, value } = e.target;
//     setData((prev: any) => ({
//       ...prev,
//       [name]: value,
//     }));
//   }
  

//   return (
//     <div>
//       <button></button>
//       {/* // <form onSubmit={login}>
//     //   <label>
//     //     Email:
//     //     <input className="bg-gray-200 p-2 m-3 rounded" type="text" name='email' value={data?.email} onChange={handleChange} />
//     //   </label>
//     //   <br />
//     //   <label>
//     //     Password:
//     //     <input type="text" name='password' className="bg-gray-200 p-2 m-3 rounded" value={data?.password} onChange={handleChange} />
//     //   </label>
//     //   <br />
//     //   <button className="px-4 py-2 bg-blue-300 rounded cursor-pointed">Login</button>
//     // </form> */}
//     </div>
    
//   );
// }