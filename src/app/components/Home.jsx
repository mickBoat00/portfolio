import { IoMdMail } from "react-icons/io";

export default function Home() {
    return <div id="#home" className="flex flex-col items-center text-center mx-auto max-w-[1000px] pt-[200px] min-h-screen">
        <div className="text-center font-[NTR] text-6xl font-light text-slate-400 mt-[-9]">
        I build softwares.
        </div>
        <div className="text-center font-[NTR] text-xl text-slate-400 max-w-[600px] mx-auto pb-12">
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Minima perferendis odit exercitationem eum ipsam quia qui vel pariatur, corporis consectetur mollitia maxime nam accusamus quae provident similique temporibus eaque! Molestiae, itaque nam autem blanditiis doloribus reprehenderit vero iste aspernatur ipsum ab adipisci possimus accusantium? Expedita architecto ipsum excepturi alias pariatur inventore debitis laborum blanditiis, dolor quo ratione molestiae, a eligendi ex perspiciatis velit itaque et rem! Deserunt non magnam cumque, porro optio odit ullam quis autem? Odio, officia! Officiis aut magnam ut, ipsum provident illo laboriosam itaque et non tenetur. Ut, accusamus unde! Fugiat non consequatur molestias labore id consequuntur.
        </div>


        <a
        href="mailto:m.boateng0000@gmail.com"
        className="flex items-center justify-center text-lg font-bold font-[NTR] px-8 py-2 text-green-400 border border-green-400 rounded cursor-pointer hover:bg-slate-400"
        >
        <IoMdMail/>
        <span className="ml-2">Say hi!</span>
        </a>

    </div>
}