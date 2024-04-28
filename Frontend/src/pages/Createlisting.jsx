import Footer from "../Components/Common/Footer";
function Createlisting() {
    return (
        <div className="bg-slate-100 h-[calc(100vh-4rem)] w-full flex flex-col items-center max-h-lvh">
            
            <div className="w-[50%] bg-gray-200 flex-col my-3  p-10 ">
                <p className="text-3xl cursor-default">Create New Listing</p>
                <form >
                    {/* title */}
                    <label htmlFor="title">Title</label>
                    <br />
                    <input type="text"
                        id="title"
                        className="w-full"
                        placeholder="Enter Title"
                    />
                    {/* descriptino */}
                    <label htmlFor="description">Description</label>
                    <br />
                    <input type="text"
                        id="description"
                        className="w-full"
                        placeholder="Enter Description"
                    />
                    {/* image */}
                    <label htmlFor="image">Image</label>
                    <br />
                    <input type="file"
                        id="image"
                        className="w-full"
                        placeholder="Enter Description"
                    />

                    {/* price and country */}
                    <div className="w-full flex justify-between">
                        <div className="w-[45%]">
                            <label htmlFor="price">Price</label>
                            <br />
                            <input type="number" id="price" className="w-full" />
                        </div>
                        <div className="w-[45%]">
                            <label htmlFor="country">Country</label>
                            <br />
                            <input type="text" id="country" className="w-full" />
                        </div>
                    </div>
                    {/* Category */}
                    <label htmlFor="category">Category</label>
                    <br />
                    <select name="Category" id="category" required className="w-full">
                        <option value="" disabled  selected>Choose A Category </option>
                        <option value="Farms">Farms</option>
                        <option value="Iconic Bulidings">Iconic_Bulidings</option>
                        <option value="Beach">Beach</option>
                        <option value="Trams">Trams</option>
                        <option value="Castle">Castle</option>
                        <option value="Wine">Wine</option>
                        <option value="Monestrys">Monestrys</option>
                        <option value="Hotel">Hotel</option>
                        <option value="Villa">Villa</option>
                        <option value="Farm House">Farm_House</option>
                    </select>
                    {/* loactiona */}
                    <label htmlFor="location">Location</label>
                    <br />
                    <input type="text"
                        id="location"
                        className="w-full"
                        placeholder="Enter Location"
                    />
                    <button className="p-2 bg-red-500 text-white rounded-lg my-4">Add</button>
                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default Createlisting;