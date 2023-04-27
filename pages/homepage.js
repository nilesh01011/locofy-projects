import { useState, useCallback } from "react";
import {
  FormControlLabel,
  Radio,
  Autocomplete,
  TextField,
  Icon,
} from "@mui/material";
import { LocalizationProvider, DatePicker } from "@mui/x-date-pickers";
import { AdapterDateFns } from "@mui/x-date-pickers/AdapterDateFns";
import { useRouter } from "next/router";
import MatterhornPopup from "../components/matterhorn-popup";
import PortalPopup from "../components/portal-popup";

const Homepage = () => {
  const [
    selectOutlinedDateTimePickerValue,
    setSelectOutlinedDateTimePickerValue,
  ] = useState(null);
  const router = useRouter();
  const [isMatterhornPopupOpen, setMatterhornPopupOpen] = useState(false);
  const [isMatterhornPopup1Open, setMatterhornPopup1Open] = useState(false);
  const [isMatterhornPopup2Open, setMatterhornPopup2Open] = useState(false);
  const [isMatterhornPopup3Open, setMatterhornPopup3Open] = useState(false);

  const onSearchTextClick = useCallback(() => {
    router.push("/results-page");
  }, [router]);

  const onHotelsTextClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onSearchFlightsButtonClick = useCallback(() => {
    router.push("/results-page");
  }, [router]);

  const onHotelClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const onViewAllStaysButtonClick = useCallback(() => {
    router.push("/");
  }, [router]);

  const openMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(true);
  }, []);

  const closeMatterhornPopup = useCallback(() => {
    setMatterhornPopupOpen(false);
  }, []);

  const openMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(true);
  }, []);

  const closeMatterhornPopup1 = useCallback(() => {
    setMatterhornPopup1Open(false);
  }, []);

  const openMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(true);
  }, []);

  const closeMatterhornPopup2 = useCallback(() => {
    setMatterhornPopup2Open(false);
  }, []);

  const openMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(true);
  }, []);

  const closeMatterhornPopup3 = useCallback(() => {
    setMatterhornPopup3Open(false);
  }, []);

  return (
    <LocalizationProvider dateAdapter={AdapterDateFns}>
      <>
        <div className="relative bg-primary-contrast w-full overflow-hidden flex flex-col items-center justify-start gap-[69px] text-center text-lg text-primary-contrast font-components-button-large hover:[background:linear-gradient(#fff,_#fff),_#87550a] sm:w-full sm:hover:bg-orange-200">
          <div className="self-stretch flex flex-col items-center justify-start text-42xl font-baloo-bhai">
            <nav className="self-stretch bg-primary-contrast h-[77px] shrink-0 flex flex-row py-[22px] px-20 box-border items-center justify-center sticky w-full top-[0] [background:white] lg:pl-10 lg:pr-10 lg:box-border md:pl-6 md:pr-6 md:box-border">
              <div className="flex-1 flex flex-row items-center justify-between">
                <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative w-[174px] h-[33px] shrink-0 overflow-hidden">
                  <img
                    className="absolute h-[96.97%] w-[99.82%] top-[1.59%] right-[0.18%] bottom-[1.44%] left-[0%] max-w-full overflow-hidden max-h-full"
                    alt=""
                    src="/symbols.svg"
                  />
                </button>
                <div className="flex flex-row items-center justify-end gap-[36px] sm:flex">
                  <div className="flex flex-row items-center justify-end gap-[30px] md:hidden">
                    <button className="cursor-pointer [border:none] p-0 bg-[transparent] relative text-sm font-components-button-large text-cornflowerblue-200 text-left inline-block">
                      Explore
                    </button>
                    <div
                      className="relative text-sm font-components-button-large text-darkslategray-200 text-left cursor-pointer"
                      onClick={onSearchTextClick}
                    >
                      Search
                    </div>
                    <div
                      className="relative text-sm font-components-button-large text-darkslategray-200 text-left cursor-pointer"
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
                      src="/notification2.svg"
                    />
                    <img
                      className="rounded-19xl w-9 h-9 shrink-0 object-cover"
                      alt=""
                      src="/top_avatar@2x.png"
                    />
                  </div>
                </div>
              </div>
            </nav>
            <div className="self-stretch relative h-[640px] shrink-0">
              <div className="absolute w-full top-[0px] right-[0px] left-[0px] [background:linear-gradient(78.78deg,_#114f8b_5.2%,_#2a9ad7)] h-[639.91px]" />
              <img
                className="absolute w-full top-[0.4px] right-[0px] left-[0px] max-w-full overflow-hidden h-[640px] object-cover"
                alt=""
                src="/banner--background@2x.png"
              />
              <div className="absolute top-[0px] left-[0px] w-full h-[640px] flex flex-col py-0 px-[140px] box-border items-center justify-center gap-[43px] md:pl-[30px] md:pr-[30px] md:box-border">
                <div className="self-stretch flex flex-col items-center justify-start gap-[5px]">
                  <div className="self-stretch relative leading-[67px] sm:text-23xl sm:leading-[48px]">{`Let’s explore & travel the world`}</div>
                  <div className="self-stretch relative text-5xl leading-[32px] font-components-button-large">
                    Find the best destinations and the most popular stays!
                  </div>
                </div>
                <div className="self-stretch rounded-3xs bg-primary-contrast flex flex-col p-5 items-start justify-start gap-[4px] text-left text-xl text-darkslategray-300 font-components-button-large md:flex-col sm:mt-5">
                  <div className="self-stretch overflow-hidden flex flex-row p-[5px] items-center justify-start gap-[5px] sm:flex-col sm:items-start">
                    <b className="flex-1 relative tracking-[0.04em] uppercase sm:w-full sm:pb-2.5 sm:mb-1.5 sm:[border-bottom:1px] sm:[border-bottom-style:solid] sm:border-b-whitesmoke-0 sm:flex-[unset] sm:self-stretch">
                      Search flights
                    </b>
                    <div className="flex flex-row items-center justify-start sm:w-full">
                      <div className="relative w-[216.53px] h-[38px] shrink-0 sm:w-[100%!important]">
                        <FormControlLabel
                          className="absolute top-[0px] left-[0px]"
                          label="Return"
                          labelPlacement="end"
                          control={<Radio size="medium" />}
                        />
                        <FormControlLabel
                          className="absolute top-[0px] left-[106px]"
                          label="One-way"
                          labelPlacement="end"
                          control={
                            <Radio color="primary" checked size="medium" />
                          }
                        />
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-row items-start justify-start text-xs text-gray-300 md:flex-col">
                    <div className="flex-1 flex flex-row p-[5px] items-start justify-start gap-[10px] md:w-full md:flex-[unset] md:self-stretch sm:flex-col">
                      <Autocomplete
                        className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch"
                        disablePortal
                        options={[
                          "Singapore (SIN)",
                          "Sydney (SYD)",
                          "Siem Reap (REP)",
                          "Shanghai (PVG)",
                          "Sanya (SYX)",
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
                      <div className="self-stretch flex-1 flex flex-col items-start justify-start sm:flex-[unset] sm:self-stretch">
                        <div className="self-stretch rounded box-border h-14 shrink-0 flex flex-col py-0 px-3 items-start justify-start border-[1px] border-solid border-gray-400">
                          <div className="bg-primary-contrast h-0.5 shrink-0 flex flex-row py-0 px-1 box-border items-center justify-start">
                            <div className="relative tracking-[0.15px] leading-[12px]">
                              Arrival
                            </div>
                          </div>
                          <div className="self-stretch overflow-hidden flex flex-row py-[15px] px-0 items-center justify-start gap-[8px] text-center text-dimgray-200">
                            <div className="hidden flex-row items-start justify-start gap-[8px]">
                              <div className="flex flex-col items-start justify-start">
                                <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                                  <div className="rounded-45xl bg-silver w-6 h-6 shrink-0 overflow-hidden hidden flex-row items-center justify-center">
                                    <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                      F
                                    </div>
                                  </div>
                                  <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-gray-500">
                                    <div className="relative tracking-[0.16px] leading-[18px]">
                                      Chip
                                    </div>
                                  </div>
                                  <img
                                    className="relative w-6 h-6 shrink-0 overflow-hidden"
                                    alt=""
                                    src="/cancel.svg"
                                  />
                                </div>
                              </div>
                              <div className="flex flex-col items-start justify-start">
                                <div className="rounded-2xl bg-gainsboro-100 flex flex-row p-1 items-center justify-start">
                                  <div className="rounded-45xl bg-silver w-6 h-6 shrink-0 overflow-hidden hidden flex-row items-center justify-center">
                                    <div className="self-stretch flex-1 relative tracking-[0.4px] leading-[166%] flex items-center justify-center">
                                      F
                                    </div>
                                  </div>
                                  <div className="flex flex-col py-[3px] px-1.5 items-start justify-start text-left text-smi text-gray-500">
                                    <div className="relative tracking-[0.16px] leading-[18px]">
                                      Chip
                                    </div>
                                  </div>
                                  <img
                                    className="relative w-6 h-6 shrink-0 overflow-hidden"
                                    alt=""
                                    src="/cancel.svg"
                                  />
                                </div>
                              </div>
                            </div>
                            <div className="flex-1 relative text-base tracking-[0.15px] leading-[24px] text-gray-500 text-left">
                              Los Angeles (LA)
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="self-stretch flex-1 sm:flex-[unset] sm:self-stretch">
                        <DatePicker
                          label="Date"
                          value={selectOutlinedDateTimePickerValue}
                          onChange={(newValue) => {
                            setSelectOutlinedDateTimePickerValue(newValue);
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
                    <div className="flex flex-col p-[5px] items-center justify-center text-center text-mini text-primary-contrast md:w-full md:text-left">
                      <div
                        className="rounded bg-orange-200 w-[164px] h-14 shrink-0 overflow-hidden flex flex-col items-center justify-center transition-[0.3s] cursor-pointer hover:bg-darkorange md:mr-[auto] sm:w-[100%!important]"
                        onClick={onSearchFlightsButtonClick}
                      >
                        <div className="relative tracking-[0.46px] leading-[26px] uppercase font-medium inline-block w-[146.98px]">
                          Search flights
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full flex flex-col py-0 px-20 box-border items-center justify-start gap-[80px] max-w-[1280px] text-left text-darkslategray-300 md:pl-[30px] md:pr-[30px] md:box-border">
            <div className="self-stretch flex flex-col items-start justify-start md:block">
              <div className="self-stretch flex flex-col items-start justify-start gap-[20px]">
                <b className="self-stretch relative tracking-[0.04em] uppercase">
                  Recent Searches
                </b>
                <div className="self-stretch flex flex-col items-start justify-center gap-[36px] text-5xl text-cornflowerblue-300 md:flex-col">
                  <div className="self-stretch flex flex-row items-center justify-center gap-[15px] md:flex-col">
                    <div className="flex-1 rounded-lg flex flex-col p-5 items-center justify-center gap-[21px] border-[1px] border-solid border-whitesmoke-200 lg:w-[520px] md:w-full md:block md:mb-[30px] md:flex-[unset] md:self-stretch">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="relative w-[44.73px] h-7 shrink-0">
                          <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[44.73px]">
                            SIN
                          </b>
                        </div>
                        <img
                          className="relative w-[117.35px] h-6 shrink-0"
                          alt=""
                          src="/duration.svg"
                        />
                        <div className="relative w-[51.27px] h-7 shrink-0 text-right">
                          <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[51.27px]">
                            LAX
                          </b>
                        </div>
                      </div>
                      <div className="relative text-xl tracking-[0.04em] capitalize text-black">
                        <b>{`Depart on: `}</b>
                        <span>7 Sep 2021</span>
                      </div>
                    </div>
                    <div className="flex-1 rounded-lg flex flex-col p-5 items-center justify-center gap-[21px] border-[1px] border-solid border-whitesmoke-200 lg:w-[520px] md:w-full md:block md:mb-[30px] md:flex-[unset] md:self-stretch">
                      <div className="self-stretch flex flex-row items-center justify-between">
                        <div className="relative w-[44.73px] h-7 shrink-0">
                          <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[44.73px]">
                            MY
                          </b>
                        </div>
                        <img
                          className="relative w-[117.35px] h-6 shrink-0"
                          alt=""
                          src="/duration1.svg"
                        />
                        <div className="relative w-[51.27px] h-7 shrink-0 text-right">
                          <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[51.27px]">
                            DUB
                          </b>
                        </div>
                      </div>
                      <div className="relative text-xl tracking-[0.04em] capitalize text-black">
                        <b>Depart on:</b>
                        <span> 9 Sep 2021</span>
                      </div>
                    </div>
                  </div>
                  <div className="self-stretch flex flex-col items-start justify-center gap-[20px] text-lg text-lightgray md:w-full">
                    <div className="self-stretch relative tracking-[0.04em] uppercase">
                      Prepare for your trip
                    </div>
                    <div className="self-stretch flex flex-row items-start justify-between sm:flex-row sm:text-center sm:flex-wrap sm:justify-between sm:ml-[-28px] sm:mr-[-28px]">
                      <button
                        className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center"
                        onClick={onHotelClick}
                      >
                        <img
                          className="relative w-[65.39px] h-[65.39px] shrink-0"
                          alt=""
                          src="/hotel-icon.svg"
                        />
                        <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-left">
                          Hotel
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                        <div className="relative w-[65.39px] h-[65.39px] shrink-0">
                          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-sandybrown w-[65.39px] h-[65.39px]" />
                          <img
                            className="absolute h-[47.93%] w-[48.38%] top-[26.04%] right-[25.81%] bottom-[26.03%] left-[25.81%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/ticket.svg"
                          />
                        </div>
                        <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-center">
                          Attractions
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                        <img
                          className="relative w-[65.39px] h-[65.39px] shrink-0"
                          alt=""
                          src="/eats-icon.svg"
                        />
                        <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-center">
                          Eats
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                        <div className="relative w-[65.39px] h-[65.39px] shrink-0">
                          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-gold w-[65.39px] h-[65.39px]" />
                          <img
                            className="absolute h-[48.43%] w-[41.17%] top-[26.51%] right-[29.42%] bottom-[25.06%] left-[29.42%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector4.svg"
                          />
                        </div>
                        <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-center">
                          Commute
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                        <div className="relative w-[70px] h-[65.39px] shrink-0">
                          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-cornflowerblue-100 w-[70px] h-[65.39px]" />
                          <img
                            className="absolute h-[40.15%] w-[40.52%] top-[29.63%] right-[29.74%] bottom-[30.22%] left-[29.74%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector5.svg"
                          />
                        </div>
                        <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-center inline-block w-[32.12px]">
                          Taxi
                        </div>
                      </button>
                      <button className="cursor-pointer [border:none] p-0 bg-[transparent] flex flex-col items-center justify-center gap-[8px] sm:pb-5 sm:box-border sm:w-[33.33%] sm:text-center">
                        <div className="relative w-[65.39px] h-[65.39px] shrink-0">
                          <div className="absolute top-[0px] left-[0px] rounded-2xl bg-yellowgreen w-[65.39px] h-[65.39px]" />
                          <img
                            className="absolute h-[35.6%] w-[39.93%] top-[32.2%] right-[30.04%] bottom-[32.2%] left-[30.03%] max-w-full overflow-hidden max-h-full"
                            alt=""
                            src="/vector6.svg"
                          />
                        </div>
                        <div className="relative text-mini tracking-[0.04em] font-components-button-large text-gray-100 text-center">
                          Movies
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[24px] text-cornflowerblue-300">
              <div className="self-stretch flex flex-row items-center justify-start sm:flex-col sm:self-start">
                <div className="flex-1 flex flex-col items-start justify-start gap-[6px] sm:flex-[unset] sm:self-stretch">
                  <b className="self-stretch relative tracking-[0.04em] uppercase">
                    Plan your next trip
                  </b>
                  <b className="self-stretch relative text-11xl tracking-[0.04em] capitalize text-darkslategray-300 sm:text-3xl">
                    Most Popular Destinations
                  </b>
                </div>
                <button className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl w-[231.38px] shrink-0 flex flex-row items-start justify-start gap-[10px] md:hidden">
                  <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[197.33px] shrink-0">
                    View all destinations
                  </div>
                  <img
                    className="relative w-6 h-6 shrink-0 overflow-hidden"
                    alt=""
                    src="/arrowright.svg"
                  />
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap md:mt-[-16px] md:mb-[-16px]">
                <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 shrink-0 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-3xs h-[182px] shrink-0 overflow-hidden">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/parisimage@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row py-2 px-3 box-border items-start justify-start">
                      <b className="flex-1 relative text-xl tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Paris
                      </b>
                      <div className="relative w-[90.92px] h-[59px] shrink-0">
                        <div className="absolute top-[21px] left-[0px] text-19xl leading-[38px] font-baloo-bhai text-primary-contrast text-right inline-block w-[90.92px]">
                          $699
                        </div>
                        <div className="absolute top-[0px] left-[38.39px] text-base tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[52.53px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 shrink-0 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-3xs h-[182px] shrink-0 overflow-hidden">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/greeceimage@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row py-2 px-3 box-border items-start justify-start">
                      <b className="flex-1 relative text-xl tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Greece
                      </b>
                      <div className="relative w-[99.92px] h-[59px] shrink-0">
                        <div className="absolute top-[21px] left-[0px] text-19xl leading-[38px] font-baloo-bhai text-primary-contrast text-right">
                          $1079
                        </div>
                        <div className="absolute top-[0px] left-[47.39px] text-base tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[52.53px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 shrink-0 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-3xs h-[182px] shrink-0 overflow-hidden">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/norwayimage@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row py-2 px-3 box-border items-start justify-start">
                      <b className="flex-1 relative text-xl tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Norway
                      </b>
                      <div className="relative w-[90.92px] h-[59px] shrink-0">
                        <div className="absolute top-[21px] left-[0px] text-19xl leading-[38px] font-baloo-bhai text-primary-contrast text-right inline-block w-[90.92px]">
                          $895
                        </div>
                        <div className="absolute top-[0px] left-[38.39px] text-base tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[52.53px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] w-3/12 shrink-0 flex flex-col box-border items-center justify-center md:p-4 md:box-border md:w-6/12 sm:w-full">
                  <div className="self-stretch relative rounded-3xs h-[182px] shrink-0 overflow-hidden">
                    <img
                      className="absolute h-full w-full top-[0px] right-[0px] bottom-[0px] left-[0px] max-w-full overflow-hidden max-h-full object-cover"
                      alt=""
                      src="/tuscanyimage@2x.png"
                    />
                    <div className="absolute w-[calc(100%_-_0.59px)] top-[0px] right-[0.29px] left-[0.29px] flex flex-row py-2 px-3 box-border items-start justify-start">
                      <b className="flex-1 relative text-xl tracking-[0.02em] font-components-button-large text-primary-contrast text-left">
                        Tuscany
                      </b>
                      <div className="relative w-[100.62px] h-[59px] shrink-0">
                        <div className="absolute top-[21px] left-[0px] text-19xl leading-[38px] font-baloo-bhai text-primary-contrast text-right inline-block w-[100.62px]">
                          $1245
                        </div>
                        <div className="absolute top-[0px] left-[48.09px] text-base tracking-[0.04em] uppercase font-components-button-large text-primary-contrast text-right inline-block w-[52.53px]">
                          from
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="rounded-12xl bg-primary-contrast w-[231.38px] hidden flex-row items-start justify-start gap-[10px] text-right md:flex md:mt-4">
                <div className="relative tracking-[0.04em] font-medium inline-block w-[197.33px] shrink-0 md:w-auto">
                  View all destinations
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/arrowright1.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-center gap-[24px] text-11xl">
              <div className="self-stretch flex flex-row items-center justify-start">
                <b className="flex-1 relative tracking-[0.04em] capitalize sm:text-3xl">
                  Recommended Holidays
                </b>
                <button className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl w-[199.89px] shrink-0 flex flex-row items-start justify-start gap-[10px] md:hidden">
                  <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[165.89px] shrink-0">
                    View all holidays
                  </div>
                  <img
                    className="relative w-6 h-6 shrink-0 overflow-hidden"
                    alt=""
                    src="/arrowright2.svg"
                  />
                </button>
              </div>
              <div className="self-stretch flex flex-row items-start justify-start ml-[-16px] mr-[-16px] md:ml-[-16px] md:mr-[-16px] md:flex-wrap">
                <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 md:mb-8 sm:w-full sm:mb-8">
                  <img
                    className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                    alt=""
                    src="/unsplash5mv818tzxeo@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-3xs bg-primary-contrast flex flex-col py-5 px-4 items-center justify-center border-[1px] border-solid border-whitesmoke-200">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                        <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Bali
                        </div>
                        <div className="self-stretch relative text-base tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          4D3N
                        </div>
                      </div>
                      <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                        $899
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 md:mb-8 sm:w-full sm:mb-8">
                  <img
                    className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                    alt=""
                    src="/switzerlandimage@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-3xs bg-primary-contrast flex flex-col py-5 px-4 items-center justify-center border-[1px] border-solid border-whitesmoke-200">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                        <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Swiss
                        </div>
                        <div className="self-stretch relative text-base tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          6D5N
                        </div>
                      </div>
                      <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                        $900
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 sm:w-full sm:mb-8">
                  <img
                    className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                    alt=""
                    src="/boracayimage@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-3xs bg-primary-contrast flex flex-col py-5 px-4 items-center justify-center border-[1px] border-solid border-whitesmoke-200">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                        <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Boracay
                        </div>
                        <div className="self-stretch relative text-base tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          5D4N
                        </div>
                      </div>
                      <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                        $699
                      </div>
                    </div>
                  </div>
                </button>
                <button className="cursor-pointer [border:none] py-0 px-4 bg-[transparent] flex-1 flex flex-col box-border items-center justify-start w-3/12 md:w-6/12 sm:w-full">
                  <img
                    className="self-stretch relative rounded-t-3xs rounded-b-none max-w-full overflow-hidden h-[242px] shrink-0 object-cover"
                    alt=""
                    src="/palawanimage@2x.png"
                  />
                  <div className="self-stretch rounded-t-none rounded-b-3xs bg-primary-contrast flex flex-col py-5 px-4 items-center justify-center border-[1px] border-solid border-whitesmoke-200">
                    <div className="self-stretch flex flex-row items-center justify-start">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[3px]">
                        <div className="self-stretch relative text-xl tracking-[0.02em] font-medium font-components-button-large text-darkslategray-200 text-left">
                          Palawan
                        </div>
                        <div className="self-stretch relative text-base tracking-[0.02em] font-components-button-large text-darkgray text-left">
                          4D3N
                        </div>
                      </div>
                      <div className="relative text-13xl leading-[34px] font-baloo-bhai text-cornflowerblue-200 text-right">
                        $789
                      </div>
                    </div>
                  </div>
                </button>
              </div>
              <div className="rounded-12xl bg-primary-contrast w-[199.89px] hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-300 md:flex md:[mrgin-top:16px]">
                <div className="relative tracking-[0.04em] font-medium inline-block w-[165.89px] shrink-0 md:w-auto">
                  View all holidays
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/arrowright3.svg"
                />
              </div>
            </div>
            <div className="self-stretch flex flex-col items-start justify-start gap-[20px] text-11xl">
              <div className="self-stretch flex flex-row items-center justify-center">
                <div className="flex-1 relative h-[35px]">
                  <b className="absolute top-[0px] left-[0px] tracking-[0.04em] capitalize inline-block w-[1105.34px] sm:text-3xl">
                    Popular Stays
                  </b>
                </div>
                <button
                  className="cursor-pointer [border:none] p-0 bg-primary-contrast rounded-12xl flex flex-row items-start justify-start gap-[10px] md:hidden"
                  onClick={onViewAllStaysButtonClick}
                >
                  <div className="relative text-lg tracking-[0.04em] font-medium font-components-button-large text-cornflowerblue-300 text-right inline-block w-[140.66px] shrink-0">
                    View all stays
                  </div>
                  <img
                    className="relative w-6 h-6 shrink-0 overflow-hidden"
                    alt=""
                    src="/arrowright4.svg"
                  />
                </button>
              </div>
              <div className="self-stretch flex flex-row items-center justify-start ml-[-12px] mr-[-12px] text-base lg:pr-10 lg:box-border lg:ml-[-12px] lg:mr-[-50px] md:mr-[-50px] md:ml-[-12px] sm:flex-col sm:pr-0 sm:box-border sm:mr-[-12px] sm:ml-[-12px]">
                <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex-1 rounded-3xs bg-primary-contrast box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro-200 hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                      alt=""
                      src="/unsplashrlwe8f8anoc@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                        <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                          Entire bungalow
                        </div>
                        <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize sm:text-xl">
                          Matterhorn Suites
                        </b>
                        <div className="self-stretch relative text-lg tracking-[0.04em]">
                          $575/night
                        </div>
                      </div>
                      <img
                        className="relative w-[25px] h-[25px] shrink-0 overflow-hidden cursor-pointer"
                        alt=""
                        src="/video2.svg"
                        onClick={openMatterhornPopup}
                      />
                    </div>
                    <div className="self-stretch relative h-[19px] shrink-0 text-cornflowerblue-200">
                      <div className="absolute top-[0px] left-[53.63px] tracking-[0.04em] inline-block w-[216.37px]">
                        (60 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[44.34px] h-[19px] text-darkslategray-300">
                        <div className="absolute top-[0px] left-[20.34px] tracking-[0.04em] font-medium">
                          4.9
                        </div>
                        <img
                          className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector7.svg"
                        />
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] shrink-0 overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex-1 rounded-3xs bg-primary-contrast box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro-200 hover:cursor-pointer lg:w-[25%!important] md:w-full sm:w-[100%!important] sm:mb-5">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                      alt=""
                      src="/unsplashtsn8bpopveo@2x.png"
                    />
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[11px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                        <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                          2-Story beachfront suite
                        </div>
                        <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize sm:text-xl">
                          Discovery Shores
                        </b>
                        <div className="self-stretch relative text-lg tracking-[0.04em]">
                          $360/night
                        </div>
                      </div>
                      <img
                        className="relative w-[25px] h-[25px] shrink-0 overflow-hidden cursor-pointer"
                        alt=""
                        src="/video2.svg"
                        onClick={openMatterhornPopup1}
                      />
                    </div>
                    <div className="self-stretch relative h-[19px] shrink-0 text-cornflowerblue-200">
                      <div className="absolute top-[0px] left-[53.63px] tracking-[0.04em] inline-block w-[216.37px]">
                        (116 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[44.34px] h-[19px] text-darkslategray-300">
                        <div className="absolute top-[0px] left-[20.34px] tracking-[0.04em] font-medium">
                          4.8
                        </div>
                        <img
                          className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector8.svg"
                        />
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] shrink-0 overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 md:w-[33.33%] sm:w-full sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex-1 rounded-3xs bg-primary-contrast box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro-200 hover:cursor-pointer lg:w-[25%!important] md:w-full sm:flex sm:w-[100%!important]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                      alt=""
                      src="/unsplashrlwe8f8anoc1@2x.png"
                    />
                    <div className="self-stretch flex-1 flex flex-row items-start justify-start gap-[5px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                        <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                          Single deluxe hut
                        </div>
                        <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize">{`Arctic Hut `}</b>
                        <div className="self-stretch relative text-lg tracking-[0.04em]">
                          $420/night
                        </div>
                      </div>
                      <img
                        className="relative w-[25px] h-[25px] shrink-0 overflow-hidden cursor-pointer"
                        alt=""
                        src="/video2.svg"
                        onClick={openMatterhornPopup2}
                      />
                    </div>
                    <div className="self-stretch relative h-[19px] shrink-0 text-cornflowerblue-200">
                      <div className="absolute top-[0px] left-[53.73px] tracking-[0.04em] inline-block w-[216.27px]">
                        (78 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[44.38px] h-[19px] text-darkslategray-300">
                        <div className="absolute top-[0px] left-[20.38px] tracking-[0.04em] font-medium">
                          4.7
                        </div>
                        <img
                          className="absolute h-[90.47%] w-[37.58%] top-[0%] right-[62.42%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector9.svg"
                        />
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] shrink-0 overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </button>
                  </div>
                </div>
                <div className="self-stretch flex-1 flex flex-row py-0 px-3 box-border items-start justify-center w-3/12 md:hidden md:w-[33.33%] sm:flex-[unset] sm:self-stretch">
                  <div className="self-stretch flex-1 rounded-3xs bg-primary-contrast box-border flex flex-col py-[15px] px-[13px] items-start justify-start gap-[23px] w-3/12 border-[1px] border-solid border-whitesmoke-200 hover:bg-gainsboro-200 hover:cursor-pointer lg:w-[25%!important] md:w-[33.33%!important] sm:flex sm:w-[100%!important]">
                    <img
                      className="self-stretch relative rounded-3xs max-w-full overflow-hidden h-[200px] shrink-0 object-cover"
                      alt=""
                      src="/unsplashyqrybvxug5q@2x.png"
                    />
                    <div className="self-stretch flex flex-row items-start justify-start gap-[11px]">
                      <div className="flex-1 flex flex-col items-start justify-start gap-[6px]">
                        <div className="self-stretch relative tracking-[0.02em] text-gray-100">
                          Deluxe King Room
                        </div>
                        <b className="self-stretch relative text-3xl tracking-[0.04em] capitalize">
                          Lake Louise Inn
                        </b>
                        <div className="self-stretch relative text-lg tracking-[0.04em]">
                          $244/night
                        </div>
                      </div>
                      <img
                        className="relative w-[25px] h-[25px] shrink-0 overflow-hidden cursor-pointer"
                        alt=""
                        src="/video2.svg"
                        onClick={openMatterhornPopup3}
                      />
                    </div>
                    <div className="self-stretch relative h-[19px] shrink-0 text-cornflowerblue-200">
                      <div className="absolute top-[0px] left-[53.63px] tracking-[0.04em] inline-block w-[216.37px]">
                        (63 reviews)
                      </div>
                      <div className="absolute top-[0px] left-[0px] w-[44.34px] h-[19px] text-darkslategray-300">
                        <div className="absolute top-[0px] left-[20.34px] tracking-[0.04em] font-medium">
                          4.6
                        </div>
                        <img
                          className="absolute h-[90.47%] w-[37.54%] top-[0%] right-[62.46%] bottom-[9.53%] left-[0%] max-w-full overflow-hidden max-h-full"
                          alt=""
                          src="/vector10.svg"
                        />
                      </div>
                    </div>
                    <button className="cursor-pointer p-0 bg-[transparent] self-stretch rounded box-border h-[46px] shrink-0 overflow-hidden flex flex-col items-center justify-center border-[1px] border-solid border-lavender sm:w-[100%!important]">
                      <div className="relative text-mini tracking-[0.46px] leading-[26px] uppercase font-medium font-components-button-large text-cornflowerblue-200 text-left">
                        More details
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <div className="rounded-12xl bg-primary-contrast hidden flex-row items-start justify-start gap-[10px] text-right text-lg text-cornflowerblue-300 md:flex md:mt-4">
                <div className="relative tracking-[0.04em] font-medium inline-block w-[140.66px] shrink-0 md:w-auto">
                  View all stays
                </div>
                <img
                  className="relative w-6 h-6 shrink-0 overflow-hidden"
                  alt=""
                  src="/arrowright5.svg"
                />
              </div>
            </div>
          </div>
          <div className="self-stretch flex flex-col items-start justify-start text-cornflowerblue-300">
            <div className="self-stretch relative bg-aliceblue h-[529px] shrink-0 overflow-hidden">
              <img
                className="absolute w-full top-[0px] right-[0px] left-[0px] max-w-full overflow-hidden h-[530px] object-cover"
                alt=""
                src="/subscribe-section-background@2x.png"
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
                  <button className="cursor-pointer [border:none] p-0 bg-orange-200 rounded w-[164px] h-14 shrink-0 overflow-hidden flex flex-col items-center justify-center hover:bg-darkorange sm:w-full sm:hover:bg-peru">
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
                  src="/logo2.svg"
                />
                <div className="self-stretch relative leading-[27px]">
                  Fickle Flight is your one-stop travel portal. We offer hassle
                  free flight and hotel bookings. We also have all your flight
                  needs in you online shop.
                </div>
                <img
                  className="relative w-[130px] h-[30px] shrink-0"
                  alt=""
                  src="/social-icons2.svg"
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
        {isMatterhornPopupOpen && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup}
          >
            <MatterhornPopup onClose={closeMatterhornPopup} />
          </PortalPopup>
        )}
        {isMatterhornPopup1Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup1}
          >
            <MatterhornPopup onClose={closeMatterhornPopup1} />
          </PortalPopup>
        )}
        {isMatterhornPopup2Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup2}
          >
            <MatterhornPopup onClose={closeMatterhornPopup2} />
          </PortalPopup>
        )}
        {isMatterhornPopup3Open && (
          <PortalPopup
            overlayColor="rgba(0, 0, 0, 0.3)"
            placement="Centered"
            onOutsideClick={closeMatterhornPopup3}
          >
            <MatterhornPopup onClose={closeMatterhornPopup3} />
          </PortalPopup>
        )}
      </>
    </LocalizationProvider>
  );
};

export default Homepage;
