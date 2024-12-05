import React from "react";

function Footer() {
  return (
    <section className="mt-10">
      <div className="border-gray-200 border-2 shadow-lg bg-white p-5 lg:flex-col m-11 lg:space-x-5 space-y-5 lg:space-y-2">
        <div className="capitalize lg:flex space-y-5 lg:space-y-0 justify-around">
          <div className="flex flex-col space-y-3">
            <h3 className="text-3xl">quick links</h3>
            <a href="#home" className="text-gray-500">
              home
            </a>
            <a href="#services" className="text-gray-500">
              services
            </a>
            <a href="#featured" className="text-gray-500">
              featured
            </a>
          </div>

          <div className="flex flex-col space-y-3">
            <h3 className="text-3xl">extra links</h3>
            <a href="/dashboard/all-listing" className="text-gray-500">
              My Listings
            </a>
            <a href="/dashboard/favourite-listing" className="text-gray-500">
              My Favorites
            </a>
          </div>
        </div>
        <div className="text-center">
          Copyright &copy; 2022{" "}
          <span className="text-primary"> Rent Garam </span> | all rights
          reserved!
        </div>
      </div>
    </section>
  );
}

export default Footer;
