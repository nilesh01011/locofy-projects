import { useState, useCallback } from "react";
import {
  Autocomplete,
  TextField,
  Icon,
  FormControlLabel,
  Checkbox,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useRouter } from "next/router";

const ResultsPage = () => {
  const [dateFieldDateTimePickerValue, setDateFieldDateTimePickerValue] =
    useState(null);
  const router = useRouter();

  const onFickleflightLogoClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onExploreTextClick = useCallback(() => {
    router.push("/homepage");
  }, [router]);

  const onHotelsTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <div className="relative bg-primary-contrast w-full overflow-hidden flex flex-col items-start justify-start text-left text-42xl text-primary-contrast font-components-button-large">
        <header className="self-stretch bg-primary-contrast h-[77px] shrink-0 flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] text-left text-sm text-darkslategray-200 font-components-button-large lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
          <div className="flex-1 flex flex-row items-center justify-between">
            <button
              className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] shrink-0 overflow-hidden"
              onClick={onFickleflightLogoClick}
            >
              <img
                className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
                alt=""
                src="/webscreen.svg"
              />
            </button>
            <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
              <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
                <div
                  className="relative cursor-pointer"
                  onClick={onExploreTextClick}
                >
                  Explore
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-components-button-large text-cornflowerblue-200 text-left inline-block">
                  Search
                </button>
                <div
                  className="relative cursor-pointer"
                  onClick={onHotelsTextClick}
                >
                  Hotels
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-components-button-large text-darkslategray-200 text-left inline-block">
                  Offers
                </button>
              </div>
              <div className="flex flex-row items-center justify-center gap-[12px]">
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden hidden md:flex"
                  alt=""
                  src="/notification.svg"
                />
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/notification1.svg"
                />
                <img
                  className="rounded-19xl w-9 h-9 shrink-0 object-cover"
                  alt=""
                  src="/top_avatar@2x.png"
                />
              </div>
            </div>
          </div>
        </header>
        <div className="self-stretch [background:linear-gradient(100.3deg,_#114f8b,_#2a9ad7)] flex flex-col items-start justify-start font-baloo-bhai">
          <div className="self-stretch relative h-[362px] shrink-0 sm:h-[480px]">
            <div className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)]" />
            <img
              className="absolute h-full w-full top-[0.4px] right-[0px] bottom-[-0.4px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
              alt=""
              src="/banner-background1@2x.png"
            />
            <div className="absolute w-full top-[calc(50%_-_96.5px)] right-[0px] left-[0px] flex flex-col py-0 px-20 box-border items-center justify-center gap-[20px] md:pl-[30px] md:pr-[30px] md:box-border md:w-full md:top-[calc(44%_-_96.5px_-_0px)] sm:w-full sm:top-[calc(32%_-_96.5px_-_0px)]">
              <div className="self-stretch flex flex-col items-center justify-start">
                <div className="self-stretch relative leading-[67px] md:text-23xl md:leading-[48px] sm:text-[31px] sm:leading-[40px]">
                  Where are you off too?
                </div>
              </div>
              <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-row p-5 items-start justify-start md:flex-col">
                <div className="flex-1 flex flex-row items-start justify-start md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                  <div className="flex-1 flex flex-col p-[5px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <Autocomplete
                      className="self-stretch"
                      disablePortal
                      options={[
                        "Singapore (SIN)",
                        "Sydney (SYD)",
                        "Siem Reap (REP)",
                        "Shanghai (PVG)Sanya (SYX)",
                      ]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Departure"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Singapore -  Changi (SIN)"
                      size="medium"
                    />
                  </div>
                  <div className="flex-1 flex flex-col p-[5px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <Autocomplete
                      className="self-stretch"
                      sx={{ width: "100%" }}
                      disablePortal
                      options={[
                        "Clark (CRK)",
                        "Launceston (LST)",
                        "Kalibo (KLO)",
                        "Colombo CMB",
                        "Melbourne (AVV)",
                        "Los Angeles (LA)",
                      ]}
                      renderInput={(params) => (
                        <TextField
                          {...params}
                          color="primary"
                          label="Arrival"
                          variant="outlined"
                          placeholder=""
                          helperText=""
                        />
                      )}
                      defaultValue="Los Angeles (LA)"
                      size="medium"
                    />
                  </div>
                  <div className="flex-1 flex flex-col p-[5px] items-center justify-center sm:w-full sm:flex-[unset] sm:self-stretch">
                    <div className="self-stretch">
                      <DatePicker
                        label="Date"
                        value={dateFieldDateTimePickerValue}
                        onChange={(newValue) => {
                          setDateFieldDateTimePickerValue(newValue);
                        }}
                        renderInput={(params) => (
                          <TextField
                            {...params}
                            color="primary"
                            variant="outlined"
                            size="medium"
                            renderInput={{ placeholder: "01/05/2022" }}
                            helperText=""
                            fullWidth
                          />
                        )}
                      />
                    </div>
                  </div>
                </div>
                <div className="flex flex-col p-[5px] items-center justify-center md:w-full md:text-left">
                  <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 shrink-0 overflow-hidden flex flex-col items-center justify-center transition-[0.3s] hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]">
                    <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-center inline-block w-[146.98px]">
                      Search flights
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-row py-[50px] px-20 items-start justify-center text-3xl text-dimgray-300 lg:p-10 lg:box-border md:py-5 md:px-6 md:box-border">
          <div className="w-[253px] shrink-0 flex flex-col items-start justify-start gap-[39px] lg:hidden">
            <div className="relative w-[228px] h-[47px] shrink-0 text-xl">
              <div className="absolute top-[0px] left-[0px] w-[228px] flex flex-col items-start justify-start gap-[24px]">
                <div className="relative tracking-[0.26px] inline-block w-[219.41px]">
                  10 out of 177 Results
                </div>
                <img
                  className="relative w-[228px] h-px shrink-0"
                  alt=""
                  src="/vector-2.svg"
                />
              </div>
            </div>
            <div className="relative w-[296.62px] h-[106px] shrink-0">
              <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[65.26px]">
                Stops
              </b>
              <FormControlLabel
                className="absolute top-[50px] left-[0px]"
                label="1 Stop"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[86px] left-[0px]"
                label="2 Stops"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className="relative w-[221px] h-[106px] shrink-0">
              <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[189.03px]">
                Booking Options
              </b>
              <FormControlLabel
                className="absolute top-[50px] left-[0px]"
                label="Book on Fickleflight"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[86px] left-[0px]"
                label="Official Airline Websites"
                labelPlacement="end"
                control={<Checkbox size="medium" />}
              />
            </div>
            <div className="relative w-[310.8px] h-[106px] shrink-0">
              <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[198.04px]">
                Flight Experience
              </b>
              <FormControlLabel
                className="absolute top-[50px] left-[0px]"
                label="No overnight flights"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[86px] left-[0px]"
                label="No long stop-overs"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
            <img
              className="relative w-[228px] h-px shrink-0"
              alt=""
              src="/vector-2.svg"
            />
            <div className="relative w-[181px] h-[106px] shrink-0">
              <b className="absolute top-[0px] left-[0px] tracking-[0.26px] inline-block w-[87.77px]">
                Airlines
              </b>
              <FormControlLabel
                className="absolute top-[50px] left-[0px]"
                label="Singapore Airlines"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
              <FormControlLabel
                className="absolute top-[86px] left-[0px]"
                label="Qatar Airways"
                labelPlacement="end"
                control={<Checkbox color="primary" size="medium" />}
              />
            </div>
          </div>
          <div className="flex-1 flex flex-row items-start justify-start gap-[24px] text-base md:flex-col md:gap-[80]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[12px] md:flex-[unset] md:self-stretch">
              <div className="relative text-lg tracking-[0.26px] text-lightslategray">
                10 out of 177 Results
              </div>
              <div className="self-stretch rounded-md bg-primary-contrast flex flex-row py-0 pr-1.5 pl-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-5 sm:box-border">
                <div className="w-1/5 shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important]">
                  <img
                    className="relative w-[34.77px] h-[46px] shrink-0 sm:[transform:scale(0.8)]"
                    alt=""
                    src="/turkish.svg"
                  />
                  <div className="relative tracking-[0.26px]">
                    Turkish Airlines
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-between text-2xl text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
                  <div className="relative w-[93px] h-[52px] shrink-0 mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      11:35 PM
                    </div>
                    <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      SIN
                    </div>
                  </div>
                  <div className="relative w-[121px] h-[55px] shrink-0 text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                    <img
                      className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                      33H 10M, 1-stop
                    </div>
                  </div>
                  <div className="relative w-[91px] h-[52px] shrink-0 text-right mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      4:45 PM
                    </div>
                    <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      LAX
                    </div>
                  </div>
                </div>
                <div className="w-32 shrink-0 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
                  <img
                    className="relative w-px h-[100px] shrink-0 sm:hidden"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="flex-1 relative tracking-[0.34px]">S$ 723</b>
                </div>
              </div>
              <div className="self-stretch rounded-md bg-primary-contrast flex flex-row py-0 pr-1.5 pl-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-5 sm:box-border">
                <div className="w-1/5 shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important]">
                  <img
                    className="relative w-[34.77px] h-[46px] shrink-0 sm:[transform:scale(0.8)]"
                    alt=""
                    src="/sia.svg"
                  />
                  <div className="relative tracking-[0.26px]">
                    Singapore Airlines
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-between text-2xl text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
                  <div className="relative w-[93px] h-[52px] shrink-0 mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      8:45 PM
                    </div>
                    <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      SIN
                    </div>
                  </div>
                  <div className="relative w-[129px] h-[55px] shrink-0 text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                    <img
                      className="absolute h-[27.46%] w-[83.03%] top-[0%] right-[8.26%] bottom-[72.54%] left-[8.71%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                      15H 10M, 2-stops
                    </div>
                  </div>
                  <div className="relative w-[91px] h-[52px] shrink-0 text-right mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      7:55 PM
                    </div>
                    <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      LAX
                    </div>
                  </div>
                </div>
                <div className="w-32 shrink-0 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
                  <img
                    className="relative w-px h-[100px] shrink-0 sm:hidden"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="flex-1 relative tracking-[0.34px]">S$ 900</b>
                </div>
              </div>
              <div className="self-stretch rounded-md bg-primary-contrast flex flex-row py-0 pr-1.5 pl-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-5 sm:box-border">
                <div className="w-1/5 shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important]">
                  <img
                    className="relative w-[34.77px] h-[46px] shrink-0 [transform:scale(0.8)]"
                    alt=""
                    src="/japan.svg"
                  />
                  <div className="relative tracking-[0.26px]">
                    Japan Airlines
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-between text-2xl text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
                  <div className="relative w-[93px] h-[52px] shrink-0 mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      8:20 PM
                    </div>
                    <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      SIN
                    </div>
                  </div>
                  <div className="relative w-[121px] h-[55px] shrink-0 text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                    <img
                      className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                      17H 30M, 1-stop
                    </div>
                  </div>
                  <div className="relative w-[91px] h-[52px] shrink-0 text-right mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      9:50 PM
                    </div>
                    <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      LAX
                    </div>
                  </div>
                </div>
                <div className="w-32 shrink-0 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
                  <img
                    className="relative w-px h-[100px] shrink-0 sm:hidden"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="flex-1 relative tracking-[0.34px]">S$ 859</b>
                </div>
              </div>
              <div className="self-stretch rounded-md bg-primary-contrast flex flex-row py-0 pr-1.5 pl-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-5 sm:box-border">
                <div className="w-1/5 shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important]">
                  <img
                    className="relative w-[34.77px] h-[46px] shrink-0 [transform:scale(0.8)]"
                    alt=""
                    src="/ana.svg"
                  />
                  <div className="relative tracking-[0.26px]">ANA</div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-between text-2xl text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
                  <div className="relative w-[93px] h-[52px] shrink-0 mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      6:35 PM
                    </div>
                    <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      SIN
                    </div>
                  </div>
                  <div className="relative w-[121px] h-[55px] shrink-0 text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                    <img
                      className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                      19H 15M, 1-stop
                    </div>
                  </div>
                  <div className="relative w-[91px] h-[52px] shrink-0 text-right mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      9:50 PM
                    </div>
                    <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      LAX
                    </div>
                  </div>
                </div>
                <div className="w-32 shrink-0 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
                  <img
                    className="relative w-px h-[100px] shrink-0 sm:hidden"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="flex-1 relative tracking-[0.34px]">S$ 936</b>
                </div>
              </div>
              <div className="self-stretch rounded-md bg-primary-contrast flex flex-row py-0 pr-1.5 pl-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-5 sm:box-border">
                <div className="w-1/5 shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important]">
                  <img
                    className="relative w-[34.77px] h-[46px] shrink-0"
                    alt=""
                    src="/americanairlines.svg"
                  />
                  <div className="relative tracking-[0.26px]">
                    American Airlines
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-between text-2xl text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
                  <div className="relative w-[93px] h-[52px] shrink-0 mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      8:20 PM
                    </div>
                    <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      SIN
                    </div>
                  </div>
                  <div className="relative w-[121px] h-[55px] shrink-0 text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                    <img
                      className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                      17H 30M, 1-stop
                    </div>
                  </div>
                  <div className="relative w-[91px] h-[52px] shrink-0 text-right mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      9:50 PM
                    </div>
                    <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      LAX
                    </div>
                  </div>
                </div>
                <div className="w-32 shrink-0 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
                  <img
                    className="relative w-px h-[100px] shrink-0 sm:hidden"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="flex-1 relative tracking-[0.34px]">S$ 936</b>
                </div>
              </div>
              <div className="self-stretch rounded-md bg-primary-contrast flex flex-row py-0 pr-1.5 pl-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-5 sm:box-border">
                <div className="w-1/5 shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important]">
                  <img
                    className="relative w-[34.77px] h-[46px] shrink-0 sm:[transform:scale(0.8)]"
                    alt=""
                    src="/turkish.svg"
                  />
                  <div className="relative tracking-[0.26px]">
                    Turkish Airlines
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-between text-2xl text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
                  <div className="relative w-[93px] h-[52px] shrink-0 mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      11:35 PM
                    </div>
                    <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      SIN
                    </div>
                  </div>
                  <div className="relative w-[121px] h-[55px] shrink-0 text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                    <img
                      className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                      33H 10M, 1-stop
                    </div>
                  </div>
                  <div className="relative w-[91px] h-[52px] shrink-0 text-right mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      4:45 PM
                    </div>
                    <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      LAX
                    </div>
                  </div>
                </div>
                <div className="w-32 shrink-0 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
                  <img
                    className="relative w-px h-[100px] shrink-0 sm:hidden"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="flex-1 relative tracking-[0.34px]">S$ 673</b>
                </div>
              </div>
              <div className="self-stretch rounded-md bg-primary-contrast flex flex-row py-0 pr-1.5 pl-[25px] items-center justify-center gap-[50px] border-[0.7px] border-solid border-lightgray sm:flex-col sm:p-5 sm:box-border">
                <div className="w-1/5 shrink-0 flex flex-row items-center justify-start gap-[7px] md:flex-col sm:flex-row sm:w-[100%!important]">
                  <img
                    className="relative w-[34.77px] h-[46px] shrink-0 [transform:scale(0.8)]"
                    alt=""
                    src="/japan1.svg"
                  />
                  <div className="relative tracking-[0.26px]">
                    Japan Airlines
                  </div>
                </div>
                <div className="flex-1 flex flex-row items-center justify-between text-2xl text-cornflowerblue-200 sm:flex-[unset] sm:self-stretch">
                  <div className="relative w-[93px] h-[52px] shrink-0 mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      10:25 PM
                    </div>
                    <div className="absolute w-[79.51%] top-[63.46%] left-[0%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      SIN
                    </div>
                  </div>
                  <div className="relative w-[121px] h-[55px] shrink-0 text-center text-base text-gray-100 sm:[transform:scale(0.9)]">
                    <img
                      className="absolute h-[27.46%] w-[88.52%] top-[0%] right-[5.5%] bottom-[72.54%] left-[5.98%] max-w-full overflow-hidden max-h-full"
                      alt=""
                      src="/flighticon.svg"
                    />
                    <div className="absolute top-[65.45%] left-[0%] tracking-[0.21px] mq428small:text-smi">
                      26H 45M, 1-stop
                    </div>
                  </div>
                  <div className="relative w-[91px] h-[52px] shrink-0 text-right mq428small:w-20">
                    <div className="absolute w-full top-[0%] left-[0%] tracking-[0.32px] font-medium inline-block mq428small:text-base">
                      9:10 AM
                    </div>
                    <div className="absolute w-[81.25%] top-[63.46%] left-[17.65%] text-base tracking-[0.26px] text-dimgray-100 inline-block mq428small:text-base">
                      LAX
                    </div>
                  </div>
                </div>
                <div className="w-32 shrink-0 flex flex-row items-center justify-center text-center text-5xl text-orange-100">
                  <img
                    className="relative w-px h-[100px] shrink-0 sm:hidden"
                    alt=""
                    src="/vector-1.svg"
                  />
                  <b className="flex-1 relative tracking-[0.34px]">S$ 859</b>
                </div>
              </div>
              <div className="relative w-[220px] h-[72px] shrink-0 text-center text-lg text-primary-contrast">
                <div className="absolute h-full w-full top-[0%] right-[0%] bottom-[0%] left-[0%] rounded-md bg-cornflowerblue-200" />
                <div className="absolute top-[calc(50%_-_10.5px)] left-[calc(50%_-_81.5px)] tracking-[0.04em] font-medium">
                  Show more results
                </div>
              </div>
            </div>
            <div className="rounded-md bg-primary-contrast w-[257px] shrink-0 flex flex-col pt-0 px-0 pb-5 box-border items-start justify-start gap-[18px] text-cornflowerblue-300 md:w-full">
              <div className="self-stretch flex flex-col items-start justify-start gap-[14px]">
                <b className="self-stretch relative tracking-[0.04em] uppercase">
                  Recently booked
                </b>
                <img
                  className="self-stretch relative max-w-full overflow-hidden h-px shrink-0"
                  alt=""
                  src="/vector-21.svg"
                />
              </div>
              <div className="self-stretch flex flex-col items-start justify-start gap-[12px] text-xs text-lightslategray font-inter">
                <div className="self-stretch rounded-md flex flex-col p-2.5 items-start justify-start gap-[10px] border-[1px] border-solid border-whitesmoke-200">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="relative w-6 h-6 shrink-0"
                        alt=""
                        src="/icon.svg"
                      />
                      <div className="relative leading-[16px]">
                        Singapore Airlines
                      </div>
                    </div>
                    <div className="relative text-base leading-[24px] font-semibold text-gray-200 text-right">
                      $1128
                    </div>
                  </div>
                  <div className="self-stretch rounded bg-whitesmoke-100 flex flex-row p-2 items-center justify-start gap-[7px] text-base text-cornflowerblue-200">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                      <div className="relative font-semibold">SIN</div>
                      <div className="relative text-xs text-lightslategray">
                        Singapore
                      </div>
                    </div>
                    <img
                      className="relative w-[48.83px] h-[11.96px] shrink-0"
                      alt=""
                      src="/flight-icon.svg"
                    />
                    <div className="flex-1 flex flex-col items-end justify-start gap-[2px]">
                      <div className="relative font-semibold">LAX</div>
                      <div className="relative text-xs text-lightslategray text-right">
                        Los Angeles
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded flex flex-row items-center justify-start gap-[20px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-4 h-4 shrink-0 overflow-hidden"
                        alt=""
                        src="/class-icon.svg"
                      />
                      <div className="relative leading-[16px]">Economy</div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-4 h-4 shrink-0 overflow-hidden"
                        alt=""
                        src="/calender.svg"
                      />
                      <div className="relative leading-[16px]">2 Adults</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row pt-2 px-0 pb-0 items-center justify-between border-t-[1px] border-solid border-whitesmoke-200">
                    <div className="relative leading-[16px]">
                      <span>{`Booked on `}</span>
                      <span className="text-royalblue">Expedia</span>
                    </div>
                    <div className="relative leading-[16px] font-semibold text-orange-100">
                      1s ago!
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-md flex flex-col p-2.5 items-start justify-start gap-[10px] border-[1px] border-solid border-whitesmoke-200">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="relative w-6 h-6 shrink-0"
                        alt=""
                        src="/icon1.svg"
                      />
                      <div className="relative leading-[16px]">
                        American Airlines
                      </div>
                    </div>
                    <div className="relative text-base leading-[24px] font-semibold text-gray-200 text-right">
                      $1024
                    </div>
                  </div>
                  <div className="self-stretch rounded bg-whitesmoke-100 flex flex-row p-2 items-center justify-start gap-[7px] text-base text-cornflowerblue-200">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                      <div className="relative font-semibold">SFO</div>
                      <div className="relative text-xs text-lightslategray">
                        San Francisco
                      </div>
                    </div>
                    <img
                      className="relative w-[48.83px] h-[11.96px] shrink-0"
                      alt=""
                      src="/flight-icon.svg"
                    />
                    <div className="flex-1 flex flex-col items-end justify-start gap-[2px]">
                      <div className="relative font-semibold">SIN</div>
                      <div className="relative text-xs text-lightslategray text-right">
                        Singapore
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded flex flex-row items-center justify-start gap-[20px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-4 h-4 shrink-0 overflow-hidden"
                        alt=""
                        src="/class-icon.svg"
                      />
                      <div className="relative leading-[16px]">First Class</div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-4 h-4 shrink-0 overflow-hidden"
                        alt=""
                        src="/calender.svg"
                      />
                      <div className="relative leading-[16px]">1 Adults</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row pt-2 px-0 pb-0 items-center justify-between border-t-[1px] border-solid border-whitesmoke-200">
                    <div className="relative leading-[16px]">
                      <span>{`Booked on `}</span>
                      <span className="text-royalblue">Kayak</span>
                    </div>
                    <div className="relative leading-[16px] font-semibold text-orange-100">
                      2s ago!
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-md flex flex-col p-2.5 items-start justify-start gap-[10px] border-[1px] border-solid border-whitesmoke-200">
                  <div className="self-stretch flex flex-row items-center justify-between">
                    <div className="flex flex-row items-center justify-start gap-[4px]">
                      <img
                        className="relative w-6 h-6 shrink-0"
                        alt=""
                        src="/icon2.svg"
                      />
                      <div className="relative leading-[16px]">
                        Japan Airlines
                      </div>
                    </div>
                    <div className="relative text-base leading-[24px] font-semibold text-gray-200 text-right">
                      $2996
                    </div>
                  </div>
                  <div className="self-stretch rounded bg-whitesmoke-100 flex flex-row p-2 items-center justify-start gap-[7px] text-base text-cornflowerblue-200">
                    <div className="flex-1 flex flex-col items-start justify-start gap-[2px]">
                      <div className="relative font-semibold">PHX</div>
                      <div className="relative text-xs text-lightslategray">
                        Phoenix
                      </div>
                    </div>
                    <img
                      className="relative w-[48.83px] h-[11.96px] shrink-0"
                      alt=""
                      src="/flight-icon.svg"
                    />
                    <div className="flex-1 flex flex-col items-end justify-start gap-[2px]">
                      <div className="relative font-semibold">DXB</div>
                      <div className="relative text-xs text-lightslategray">
                        Dubai
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch rounded flex flex-row items-center justify-start gap-[20px]">
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-4 h-4 shrink-0 overflow-hidden"
                        alt=""
                        src="/class-icon.svg"
                      />
                      <div className="relative leading-[16px]">Economy</div>
                    </div>
                    <div className="flex-1 flex flex-row items-start justify-start gap-[8px]">
                      <img
                        className="relative w-4 h-4 shrink-0 overflow-hidden"
                        alt=""
                        src="/calender.svg"
                      />
                      <div className="relative leading-[16px]">3 Adults</div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row pt-2 px-0 pb-0 items-center justify-between border-t-[1px] border-solid border-whitesmoke-200">
                    <div className="relative leading-[16px]">
                      <span>{`Booked on `}</span>
                      <span className="text-royalblue">Skyscanner</span>
                    </div>
                    <div className="relative leading-[16px] font-semibold text-orange-100">
                      3s ago!
                    </div>
                  </div>
                </div>
                <div className="self-stretch rounded-[3px] bg-cornflowerblue-400 flex flex-row py-[7px] px-2.5 items-center justify-center gap-[4px] text-cornflowerblue-200">
                  <div className="relative leading-[16px]">Show more</div>
                  <img
                    className="relative w-4 h-4 shrink-0 overflow-hidden"
                    alt=""
                    src="/icon--back.svg"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="self-stretch flex flex-col items-start justify-start text-center text-lg text-cornflowerblue-300">
          <div className="self-stretch flex flex-col items-start justify-start">
            <div className="self-stretch relative bg-aliceblue h-[529px] shrink-0 overflow-hidden">
              <img
                className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
                alt=""
                src="/newsletter-section-background1@2x.png"
              />
              <div className="[position:relative!important] top-[52px] left-[auto!important] w-[549px] flex flex-col p-5 box-border items-center justify-start gap-[30px] ml-[auto] mr-[auto] md:py-6 md:px-0 md:box-border sm:pl-6 sm:pr-6 sm:box-border sm:ml-[auto] sm:mr-[auto] sm:[position:relative!important] sm:left-[auto!important] sm:w-full">
                <div className="self-stretch flex flex-col items-center justify-start gap-[7px]">
                  <b className="self-stretch relative tracking-[0.04em] uppercase">
                    subscribe to our newsletter
                  </b>
                  <b className="self-stretch relative text-11xl text-darkslategray-100">
                    Get weekly updates
                  </b>
                </div>
                <div className="self-stretch rounded-xl bg-primary-contrast shadow-[0px_0px_24px_rgba(0,_0,_0,_0.03)] flex flex-col py-7 px-[30px] items-start justify-start gap-[17px] text-left text-slategray border-[1px] border-solid border-whitesmoke-200">
                  <div className="self-stretch flex flex-col items-start justify-start">
                    <div className="self-stretch relative leading-[34px]">
                      Fill in your details to join the party!
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-start gap-[10px]">
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Your name"
                        size="medium"
                        margin="none"
                      />
                    </div>
                    <div className="self-stretch flex flex-col items-start justify-start">
                      <TextField
                        className="[border:none] bg-[transparent] self-stretch"
                        color="primary"
                        variant="outlined"
                        type="text"
                        label="Email address"
                        size="medium"
                        margin="none"
                      />
                    </div>
                  </div>
                  <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 shrink-0 overflow-hidden flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-orange-200">
                    <div className="overflow-hidden flex flex-col py-2 px-[22px] items-start justify-start">
                      <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-primary-contrast text-left">
                        submit
                      </div>
                    </div>
                  </button>
                </div>
              </div>
            </div>
            <footer className="self-stretch [background:linear-gradient(91.74deg,_#0b5ba8_25.38%,_#299bd8)] flex flex-row py-[33px] px-[84px] items-start justify-start gap-[44px] text-left text-lg text-primary-contrast font-components-button-large lg:p-10 lg:box-border md:flex-col md:pt-10 md:px-6 md:pb-[30px] md:box-border sm:py-[30px] sm:px-6 sm:box-border">
              <div className="flex-1 flex flex-col items-start justify-start gap-[14px] mb-[40px!important] md:flex-[unset] md:self-stretch">
                <img
                  className="relative w-[174px] h-[33px] shrink-0 overflow-hidden"
                  alt=""
                  src="/logo1.svg"
                />
                <div className="self-stretch relative leading-[27px]">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className="relative w-[130px] h-[30px] shrink-0"
                  alt=""
                  src="/social-icons1.svg"
                />
              </div>
              <div className="relative box-border w-px h-[157.87px] shrink-0 border-r-[1px] border-solid border-gray-600 md:hidden" />
              <div className="flex-1 flex flex-row items-start justify-between text-base md:flex-[unset] md:self-stretch sm:flex-col">
                <div className="relative w-[197.33px] h-[159.76px] shrink-0 sm:mb-[40px!important]">
                  <div className="absolute top-[47.76px] left-[0px] inline-block w-[135.67px]">
                    About Us
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[174.72px]">
                    Company
                  </div>
                  <div className="absolute top-[78.76px] left-[0px] inline-block w-[84.28px]">
                    News
                  </div>
                  <div className="absolute top-[109.76px] left-[0px] inline-block w-[115.11px]">
                    Careers
                  </div>
                  <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
                    How we work
                  </div>
                </div>
                <div className="relative w-[197.33px] h-[159.76px] shrink-0 sm:mb-[40px!important]">
                  <div className="absolute top-[47.76px] left-[0px] inline-block w-[109.63px]">
                    Account
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[131.56px]">
                    Support
                  </div>
                  <div className="absolute top-[78.76px] left-[0px] inline-block w-[197.33px]">
                    Support Center
                  </div>
                  <div className="absolute top-[109.76px] left-[0px] inline-block w-[52.99px]">
                    FAQ
                  </div>
                  <div className="absolute top-[140.76px] left-[0px] inline-block w-[164.44px]">
                    Accessibility
                  </div>
                </div>
                <div className="relative w-[197.33px] h-[159.76px] shrink-0">
                  <div className="absolute top-[47.76px] left-[0px] inline-block w-[172.87px]">
                    Covid Advisory
                  </div>
                  <div className="absolute top-[0px] left-[0px] text-xl leading-[27px] font-medium inline-block w-[76.65px]">
                    More
                  </div>
                  <div className="absolute top-[78.76px] left-[0px] inline-block w-[135.36px]">
                    Airline Fees
                  </div>
                  <div className="absolute top-[109.76px] left-[0px] inline-block w-[50.56px]">
                    Tips
                  </div>
                  <div className="absolute top-[140.76px] left-[0px] inline-block w-[197.33px]">
                    Quarantine Rules
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </div>
      </div>
    </LocalizationProvider>
  );
};

export default ResultsPage;
