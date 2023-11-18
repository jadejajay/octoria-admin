import { Outlet, Link } from "react-router-dom";

export async function loader({ params }:{ params : any}) {
  console.log('loader', params)
  const url = params.model ? `http://itekindia.com/octoria/models/getmodel.php?file=${params.model}` : 'http://itekindia.com/octoria/models/getmodel.php?file=shoe-draco.glb'
  return { url };
}