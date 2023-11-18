export async function loader({ params }:{ params : any}) {
  console.log(params?.model)
  const url = params?.model ? `http://itekindia.com/octoria/models/getmodel.php?file=${params.model}` : 'http://itekindia.com/octoria/models/getmodel.php?file=shoe-draco.glb'
  return { url };
}