import "./header.css";
import { DateRange } from "react-date-range";
import "react-date-range/dist/styles.css";
import "react-date-range/dist/theme/default.css";
import { useState } from "react";
import {
	faBed,
	faCalendarDays,
	faCar,
	faPerson,
	faPlane,
	faTaxi,
	faGlobe,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { format } from "date-fns";
function Header() {
	const [openDate, setOpenDate] = useState(false);
	const [date, setDate] = useState([
		{
			startDate: new Date(),
			endDate: new Date(),
			key: "selection",
		},
	]);
	const [openOptions, setOpenOptions] = useState(false);
	const [options, setOptions] = useState({
		adult: 1,
		children: 0,
		room: 1,
	});

	const handleOption = (name, operation) => {
		setOptions((prevOptions) => {
			return {
				...prevOptions,
				[name]: operation === "+" ? options[name] + 1 : options[name] - 1,
			};
		});
	};
	return (
		<div className="header">
			<div className="headerContainer">
				<div className="headerList">
					<div className="headerListItem active">
						<FontAwesomeIcon icon={faBed} />
						<span>Stays</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faPlane} />
						<span>Flights</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faCar} />
						<span>Car rentals</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faGlobe} />
						<span>Attractions</span>
					</div>
					<div className="headerListItem">
						<FontAwesomeIcon icon={faTaxi} />
						<span>Taxi</span>
					</div>
				</div>
				<h1 className="headerTitle">A lifetime of discounts? It's Genius.</h1>
				<p className="headerDesc">
					Get rewarded for your travels – unlock instant savings of 10% or more
					with a free booking account
				</p>
				<button className="headerBtn">Sign in / Register</button>
				<div className="headerSearch">
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faBed} className="headerIcon" />
						<input
							type="text"
							placeholder="	Where are you going?"
							className="headerSearchInput"
						/>
					</div>
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faCalendarDays} className="headerIcon" />
						<span
							onClick={() => setOpenDate(!openDate)}
							className="headerSearchText"
						>{`${format(date[0].startDate, "MM/dd/yyyy")} to ${format(
							date[0].endDate,
							"MM/dd/yyyy"
						)}`}</span>
						{openDate && (
							<DateRange
								editableDateInputs={true}
								onChange={(item) => setDate([item.selection])}
								moveRangeOnFirstSelection={false}
								ranges={date}
								className="date"
							/>
						)}
					</div>
					<div className="headerSearchItem">
						<FontAwesomeIcon icon={faPerson} className="headerIcon" />
						<span className="headerSearchText">{`${options.adult}  AdultS · ${options.children}  Children · ${options.room} Room `}</span>
						<div className="options">
							<div className="optionItem">
								<span className="optionText">Adults</span>
								<div className="optionCounter">
									<button
										disabled={options.adult <= 1}
										className="optionCounterButton"
										onClick={() => handleOption("adult", "-")}
									>
										-
									</button>
									<span className="optionCounterNumber">{options.adult}</span>
									<button
										className="optionCounterButton"
										onClick={() => handleOption("adult", "+")}
									>
										+
									</button>
								</div>
							</div>
							<div className="optionItem">
								<span className="optionText">Children</span>
								<div className="optionCounter">
									<button
										disabled={options.children === 0}
										className="optionCounterButton"
										onClick={() => handleOption("children", "-")}
									>
										-
									</button>
									<span className="optionCounterNumber">
										{options.children}
									</span>
									<button
										className="optionCounterButton"
										onClick={() => handleOption("children", "+")}
									>
										+
									</button>
								</div>
							</div>
							<div className="optionItem">
								<span className="optionText">Rooms</span>
								<div className="optionCounter">
									<button
										disabled={options.room === 1}
										className="optionCounterButton"
										onClick={() => handleOption("room", "-")}
									>
										-
									</button>
									<span className="optionCounterNumber">{options.room}</span>
									<button
										className="optionCounterButton"
										onClick={() => handleOption("room", "+")}
									>
										+
									</button>
								</div>
							</div>
						</div>
					</div>
					<div className="headerSearchItem">
						<button className="headerBtn">Search</button>
					</div>
				</div>
			</div>
		</div>
	);
}

export default Header;
