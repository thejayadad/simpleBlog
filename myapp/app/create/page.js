import { addPost } from "@/lib/actions";
import getServerUser from "@/lib/getServerUser";


const CreatePost =  () => {
    const user =  getServerUser()
    console.log("Create Post " + user)
  return (
    <div>   
        <h2 className="text-center">Create Post</h2>
        <form
        action={addPost}
        >
            <input type="text" placeholder="Title...." name="title" required />
            <input type="text" placeholder="Image..." name="imgUri" required />

            <button type="submit">Create</button>
        </form>
    </div>
  )
}

export default CreatePost 