import Layout from "@components/Layout/Layout";
import Image from "next/image";
import PROFILE_IMAGE from "@img/profile.png";

export default function Home() {
  return (
    <Layout>
      <div className="w-full min-h-screen pt-14 flex justify-center items-center">
        <div className="container mx-auto flex px-10 py-24 lg:flex-row flex-col items-center justify-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-16 max-w-2xl flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <div className="my-6">
              <span className="sm:text-4xl text-3xl mb-4 font-semibold text-gray-900">
                사용자의 입장을 생각하는 개발자
              </span>
            </div>
            <p className="mb-4 leading-relaxed text-sm font-normal">
              <span className="font-bold text-base text-red-400">
                “생활 속에 녹아있는 편리한 서비스를 만들자”
              </span>
              라는 모토를 이루어가는 개발자입니다.
            </p>
            <p className="mb-4 leading-relaxed text-sm font-normal">
              새로운 기술에 대한 관심이 많지만, 기술과 문제의 근본에 다각면의
              시선을 가지고 다가가는 걸 좋아합니다.<br/>따라서 스터디 운영 및
              참여하여 다양한 사람들과 학습을 공유하고 함께 프로젝트를 진행하여
              개발 역량을 쌓아왔습니다.
            </p>
            <p className="mb-4 leading-relaxed text-sm font-normal">
              또한{" "}
              <span className="font-bold text-base text-red-400">
                꾸준한 개발 습관을 만들기 위해 React, Next.js, TypeScript로
                사이드 프로젝트를 하며
              </span>{" "}
              기술에 대해 고민하고 성장할 수 있는 환경을 만들어왔습니다.
            </p>
            <p className="mb-4 leading-relaxed text-sm font-normal">
              개발 뿐만 아니라 서비스에 대한 관심을 바탕으로 개발에 참여하여<br/>
              <span className="font-bold text-base text-red-400">
                서비스의 가치에 중점을 둔 개발하여 사용자에게 편리한 UI/UX를
                제공
              </span>
              하기 위해 노력합니다.
            </p>
            <div className="flex justify-center my-6">
              <button className="inline-flex text-white bg-[#D4C9A8] border-0 py-2 px-6 focus:outline-none hover:bg-[#A7A37E] rounded text-lg">
                Resume
              </button>
              <button className="ml-4 inline-flex text-gray-500 bg-gray-200 border-0 py-2 px-6 focus:outline-none hover:bg-gray-400 rounded text-lg">
                Portfolio
              </button>
            </div>
          </div>
          <div className="lg:max-w-md lg:w-full md:w-1/2 w-5/6 rounded-xl overflow-hidden">
            <Image
              className="object-cover object-center h-full w-auto"
              alt="Profile"
              src={PROFILE_IMAGE}
              width={1000}
              height={1000}
            />
          </div>
        </div>
      </div>
    </Layout>
  );
}
