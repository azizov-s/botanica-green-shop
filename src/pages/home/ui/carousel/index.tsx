import UI from "../../../../shared/ui"
import CarouselFlawor from '../../../../shared/assets/images/CarouselFlawor.png'


const Carousel = () => {
  return (
    <div className='bg-[#F5F5F580] dark:bg-inherit flex items-center justify-between'>
      <div className="py-16 px-10 w-4/5">
        <p className="text-[14px] text-[#3D3D3D]">Welcome to GreenShop</p>
        <h1 className="text-[70px] font-extrabold leading-[70px] my-1.5">Let’s Make a <br />
          Better <span className="text-[#46A358]">Planet</span>
        </h1>
        <p className="text-[14px] text-[#727272] mb-10 w-5/6">We are an online plant shop offering a wide range of cheap and trendy plants. Use our plants to create an unique Urban Jungle. Order your favorite plants!</p>
        <UI.Button size="xl" color="primary">
          SHOP NOW
        </UI.Button>
      </div>
      <div className="flex items-end w-3/5">
        <img src={CarouselFlawor} className="w-[25%] mb-[35px] mr-[-28%]" alt="" />
        <img src={CarouselFlawor} className="" />
      </div>
    </div>
  )
}

export default Carousel