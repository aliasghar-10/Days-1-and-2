export default function BlogPost ({params}:{params: {id:string}}){
    return (
        <div>
            <h1>
                Hello World {params.id}
            </h1>
            <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sint cumque rem voluptate voluptates quasi in est, dicta nemo hic amet cum quaerat cupiditate blanditiis atque odio consequatur autem dolorum ad, reprehenderit exercitationem? Veniam quibusdam perferendis, dolorem magni aliquid, beatae facere quos nisi iusto iure adipisci maxime maiores minus nobis quis! {params.id}
            </p>
        </div>
    )
}