import DropZoneFile from "./DropZoneFile"

function Documents() {
  return (
    <div className="text-white flex flex-col ">
 <h2 className="text-white mb-4  text-xl ">Please provide your Documents.</h2>

<div className="flex flex-col gap-6">
<div className="">
<h4 className="text-lg mb-4 ">
      Frontal passport/Id
    </h4>
< DropZoneFile/>
 
</div>

<div className="">
<h4 className="text-lg mb-4 ">
     Backend passport/id
    </h4>
< DropZoneFile/>
</div>
</div>

</div>

  
  )
}

export default Documents