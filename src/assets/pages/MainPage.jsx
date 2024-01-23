import React from 'react';

function MainPage() {
  return (
    <>
      <div className="absolute w-full h-full overflow-hidden">
        <img
          src="/images/flower-white.png"
          alt=""
          className="absolute block w-3/6 md:w-2/6 h-auto -top-16 -right-14 lg:-top-32 lg:-right-28"
        />
      </div>
      <section className="bg-slate-50">
        <div className="min-h-screen max-w-screen-xl mx-auto overflow-x-hidden bg-slate-50 flex flex-col lg:flex-row gap-y-12 items-center justify-center pt-20 pb-10">
          <div className="relative px-6 lg:px-0 flex-1">
            <img src="/images/flower-hero.png" alt="" className=" w-5/6" />
            <div className="absolute -bottom-4 right-10 md:-bottom-0 md:right-20 bg-white flex flex-col p-4 md:p-8 items-center gap-2 md:gap-4">
              <ul className="list-none flex text-color-danger-500 gap-3">
                <li className="flex flex-col items-center ">
                  <span className="text-lg">54</span>
                  <span className="text-xs">Hari</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="text-lg">06</span>
                  <span className="text-xs">Jam</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="text-lg">15</span>
                  <span className="text-xs">Menit</span>
                </li>
                <li className="flex flex-col items-center">
                  <span className="text-lg">02</span>
                  <span className="text-xs">Detik</span>
                </li>
              </ul>
              <div className="border border-color-danger-500 bor p-2 text-xs text-color-danger-500 ">
                <p>Jumat, 6 September 2023</p>
              </div>
            </div>
          </div>
          <div className="flex flex-col items-center lg:items-start gap-4 px-10 lg:px-0 lg:pr-10 max-w-xs md:max-w-xl mx-auto relative flex-1">
            <img src="/images/flower-cherry.png" alt="" className="absolute w-1/6 top-4 right-10 rotate-45 z-10" />
            <div className="font-italianno relative">
              <p className="text-5xl md:text-6xl lg:text-8xl text-color-primary-500">Ucok</p>
              <span className="text-3xl md:text-4xl lg:text-6xl  absolute text-color-danger-500">dan</span>
              <p className="text-5xl md:text-6xl lg:text-8xl ml-10 lg:ml-16 text-color-primary-500">Nurahmah</p>
            </div>
            <p className="text-xs md:text-sm text-center lg:text-left text-color-danger-500">
              Dan di antara tanda-tanda kekuasaan-Nya ialah Dia menciptakan
              untukmu isteri-isteri dari jenismu sendiri, supaya kamu cenderung
              dan merasa tenteram kepadanya, dan dijadikan-Nya diantaramu rasa
              kasih dan sayang. Sesungguhnya pada yang demikian itu benar-benar
              terdapat tanda-tanda bagi kaum yang berfikir. (QS. Ar-Rum: 21)
            </p>
          </div>
        </div>
      </section>

      <section />
    </>
  );
}

export default MainPage;
