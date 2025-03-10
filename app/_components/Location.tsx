"use client";

import React from "react";
import Image from "next/image";

import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";

import AugustImage from "@/app/images/august.png";
import LocationImage from "@/app/images/location.png";
import ChurchImage from "@/app/images/church.png";

import { IoLocationOutline } from "react-icons/io5";

import { STRINGS } from "@/app/utils/strings";

const Parents = () => {
  const {
    church,
    churchLabel,
    churchLocation,
    churchLocation2,
    viewOnMapButton,
    party,
    partyLabel,
    partyLocation,
    partyLocation2,
    whereAndWhen,
    location,
  } = STRINGS;

  const openGoogleMapsChurch = () => {
    const encodedLocation = encodeURIComponent(churchLocation2);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
    );
  };

  const openGoogleMapsParty = () => {
    const encodedLocation = encodeURIComponent(partyLocation2);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
    );
  };
  return (
    <>
      <div className="flex flex-col items-center w-full">
        <h2 className="text-gold-star text-start md:text-center text-4xl allura-font font-bold">
          {location}
        </h2>
        <h3 className="text-2xl font-semibold my-4 text-start md:text-center">
          {whereAndWhen}
        </h3>
        <div className="shadow-lg m-4 md:m-2 bg-white">
          <div className="flex flex-col">
            <Image
              src={ChurchImage}
              alt="Church Image"
              width={770}
              height={770}
              className="rounded"
              quality={100}
            />
          </div>
          <div className="p-6">
            <p className="text-lg sm:text-2xl font-semibold my-4">{church}</p>
            <div className="flex flex-row gap-2">
              <Image
                src={AugustImage}
                alt="Date Church Image"
                width={20}
                height={20}
                style={{ objectFit: "cover" }}
                quality={100}
                className="mb-4"
              />
              <span>{churchLabel}</span>
            </div>
            <div className="flex flex-row gap-2">
              <IoLocationOutline size={20} />
              <span>{churchLocation}</span>
            </div>
            <div>{churchLocation2}</div>
            <div className="mt-4">
              <Button
                className="w-full"
                type="button"
                variant="outline"
                onClick={openGoogleMapsChurch}
              >
                <MapPin />
                {viewOnMapButton}
              </Button>
            </div>
          </div>
        </div>

        <div className="shadow-lg m-4 md:m-2 bg-white">
          <div className="flex flex-col">
            <Image
              src={LocationImage}
              alt="Party Image"
              width={770}
              height={770}
              className="rounded"
              quality={100}
            />
          </div>
          <div className="p-6">
            <p className="text-lg sm:text-2xl font-semibold my-4">{party}</p>
            <div className="flex flex-row gap-2">
              <Image
                src={AugustImage}
                alt="Date Church Image"
                width={20}
                height={20}
                style={{ objectFit: "cover" }}
                quality={100}
                className="mb-4"
              />
              <span>{partyLabel}</span>
            </div>
            <div className="flex flex-row gap-2">
              <IoLocationOutline size={20} />
              <span>{partyLocation}</span>
            </div>
            <div className="mb-4">{partyLocation2}</div>

            <div className="mt-4">
              <Button
                className="w-full"
                type="button"
                variant="outline"
                onClick={openGoogleMapsParty}
              >
                <MapPin />
                {viewOnMapButton}
              </Button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Parents;
