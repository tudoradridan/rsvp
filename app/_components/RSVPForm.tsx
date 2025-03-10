"use client";

import { useState } from "react";
import { MapPin } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
  Select,
  SelectItem,
  SelectContent,
  SelectTrigger,
  SelectGroup,
  SelectValue,
} from "@/components/ui/select";

import { submitRSVP } from "@/app/actions/submitRSVP";
import { toast } from "sonner";

import { STRINGS } from "@/app/utils/strings";

const RSVPForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [menu, setMenu] = useState("standard");
  const [accompany, setAccompany] = useState<string | null>(null);
  const [attendance, setAttendance] = useState("Da");
  const [details, setDetails] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const {
    title,
    description,
    description2,
    description22,
    description3,
    description33,
    eventDate,
    viewOnMapButton,
    nameLabel,
    emailLabel,
    accompanyLabel,
    detailsLabel,
    submitButton,
    eventLocation,
    menuLabel,
    menuSelect,
    menuStandard,
    menuVegetarian,
    noOption,
  } = STRINGS;

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    if (!name) {
      setErrors((prev) => ({ ...prev, name: "Name is required" }));
      return;
    }

    if (!email) {
      setErrors((prev) => ({ ...prev, email: "Email is required" }));
      return;
    }

    const formData = new FormData();
    formData.append("name", name);
    formData.append("email", email);
    formData.append("accompany", accompany || "0");
    formData.append("attendance", attendance);
    formData.append("menu", menu);
    formData.append("details", details);

    setIsLoading(true);
    const response = await submitRSVP(formData);
    if (response.success) {
      // SHOW SUCCESS MESSAGE TOAST
      toast.success(STRINGS.thankYouMessage);

      // RESET FORM
      setName("");
      setEmail("");
      setAccompany(null);
      setMenu("");
      setAttendance("");
      setDetails("");
      setErrors({});
    } else {
      // SHOW ERROR MESSAGE TOAST
      toast.error("Ops! Ceva nu a mers bine. Te rugam sa incerci din nou.");
      if (response.error) {
        if (response.error.code === "23505") {
          setErrors({ email: "Acest email este deja existent." });
        }
      }
    }
    setIsLoading(false);
  };
  const openGoogleMaps = () => {
    const encodedLocation = encodeURIComponent(eventLocation);
    window.open(
      `https://www.google.com/maps/search/?api=1&query=${encodedLocation}`
    );
  };

  return (
    <section className="w-full max-w-3xl md:mx-auto my-10 p-4 shadow-lg m-4 md:m-2 bg-white">
      <h1 className="text-2xl font-bold mb-4 text-center text-gold-star">
        {title}
      </h1>
      <p className="mb-2 allura-font text-2xl text-center">{description}</p>

      <p className="text-center">{description2}</p>
      <p className="text-center">{description22}</p>
      <hr className="my-3 h-2" />
      <p className="text-center">{description3}</p>
      <p className="mb-2 text-center">{description33}</p>
      <div className="my-6">
        <Calendar
          mode="single"
          selected={new Date(eventDate)}
          className="rounded-md-border flex flex-col items-center"
          fromDate={new Date(eventDate)}
          toDate={new Date(eventDate)}
          defaultMonth={new Date(eventDate)}
          ISOWeek
        />
        <div className="mt-4">
          <Button
            className="w-full"
            type="button"
            variant="outline"
            onClick={openGoogleMaps}
          >
            <MapPin />
            {viewOnMapButton}
          </Button>
        </div>
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <Label htmlFor="name">{nameLabel}</Label>
          <Input
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />
          {errors.name && (
            <p className="text-red-500 text-sm mt-1">{errors.name}</p>
          )}
        </div>
        <div>
          <Label htmlFor="email">{emailLabel}</Label>
          <Input
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
          {errors.email && (
            <p className="text-red-500 text-sm mt-1">{errors.email}</p>
          )}
        </div>
        <div>
          <Label htmlFor="accompany">{accompanyLabel}</Label>
          <Input
            id="accompany"
            type="number"
            min="0"
            value={accompany || ""}
            onChange={(e) => setAccompany(e.target.value)}
          />
        </div>
        <div>
          <Label htmlFor="menu">{menuLabel}</Label>
          <Select onValueChange={(value) => setMenu(value)}>
            <SelectTrigger className="w-full">
              <SelectValue placeholder={menuSelect} />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem value="standard">{menuStandard}</SelectItem>
                <SelectItem value="vegetarian">{menuVegetarian}</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        <div>
          <Label htmlFor="details">{detailsLabel}</Label>
          <Input
            id="details"
            type="text"
            value={details}
            onChange={(e) => setDetails(e.target.value)}
          />
        </div>
        <div className="flex flex-col items-center justify-center gap-4 my-4">
          <Button
            type="submit"
            disabled={isLoading}
            onClick={() => setAttendance("Da")}
          >
            {isLoading ? "Se trimite..." : submitButton}
          </Button>
          <Button
            type="submit"
            disabled={isLoading}
            variant="outline"
            onClick={() => setAttendance("Nu")}
          >
            {isLoading ? "Se trimite..." : noOption}
          </Button>
        </div>
      </form>
    </section>
  );
};

export default RSVPForm;
