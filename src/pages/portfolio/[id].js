import React from 'react'
import { useRouter } from 'next/router'

const ProductID = () => {
  const router = useRouter()
  const { id } = router.query
  console.log('id', id)
  const pathname = router.pathname;
  console.log('pathname', pathname)
  return (
    <div className="max-w-screen-lg mx-auto flex flex-col items-center gap-y-4">
     
      <h1>Product id {id}{' '}{pathname}</h1>
    </div>
  )
}

export default ProductID


// 14 - Next.js Navigation
// import { useParams, usePathname } from 'next/navigation'

// const ProductID = () => {
//   const params = useParams();
//   const pathname = usePathname();
  
//   // Get the dynamic ID from the params
//   const  id  = params?.id;

//   console.log('id', id);
//   console.log('pathname', pathname);

//   return (
//     <div>
//       Product id {id} {pathname}
//     </div>
//   );
// }

// export default ProductID;
