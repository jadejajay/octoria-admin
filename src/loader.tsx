export async function loader({ params }:{ params : any}) {
  console.log(params?.model)
  const url = params?.model ? `https://ibaisindia.co.in/octoria/models/getmodel.php?file=${params.model}` : 'https://ibaisindia.co.in/octoria/models/getmodel.php?file=shoe-draco.glb'
  return { url };
}