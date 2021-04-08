import React,  {useState, Fragment } from 'react';
import { Form, FormControl, Dropdown, ButtonGroup } from 'react-bootstrap';
import './App.css';

function Mobile(props) {

    const dropList = [
        {
            id: "1",
            country: "India",
            code: "+91"
        },
        {
            id: "2",
            country: "America",
            code: "+374"
        },
        {
            id: "3",
            country: "Brazil",
            code: "+55"
        },
        {
            id: "4",
            country: "United Kingdom",
            code: "+44"
        },
        {
            id: "5",
            country: "France",
            code: "+33"
        },
        {
            id: "6",
            country: "Garbon",
            code: "+241"
        },
        {
            id: "7",
            country: "Egypt",
            code: "+20"
        },
        {
            id: "8",
            country: "Spain",
            code: "+34"
        },
        {
            id: "9",
            country: "Chile",
            code: "+56"
        },
        {
            id: "10",
            country: "SwitzerLand",
            code: "+41"
        },
        {
            id: "11",
            country: "Cook Islands",
            code: "+682"
        },
        {
            id: "12",
            country: "Angola",
            code: "244"
        },
        {
            id: "13",
            country: "Argentina",
            code: "+54"
        }
    ];
    const [dropDownVal, setDropDownVal] = useState(`${dropList[0].code}​​​​​​​​`);
    const [selectedCountryCode,setSelectedCountryCode ] = useState(dropList[0].code);
    const [countryList, setCountryList] = useState(dropList);
    const [searchQuery, setSearchQuery] = useState('');

    const onSelect = (eventKey) => {
        console.log(eventKey);
        const selectedCountry = dropList.find(list => list.code === eventKey);
        console.log('---selectedCountryCode--', selectedCountry); 
        setDropDownVal(`${selectedCountry.code}​​​​​​​​`);
        setSelectedCountryCode(eventKey);
         setSearchQuery('');
         setCountryList(dropList);
    }
     
    const searchCountry = (e) => {
        console.log('---', e.target.value);
        const query = e.target.value;
        const lowerCaseQuery = query.toLowerCase();
        const searchedData = query ?
            dropList.filter((list) =>
                list["country"].toLowerCase().includes(lowerCaseQuery) || 
                list["code"].toLowerCase().includes(lowerCaseQuery)
            ) :
            dropList;
            setSearchQuery(query);
            setCountryList(searchedData);
    }
    
     return (
        <Form.Group controlId="formBasicEmail">
        <Form.Label style={{ marginRight: '270px', fontSize: '15px' }}>Mobile</Form.Label>

        <Dropdown as={ButtonGroup} onSelect={onSelect}>
            <Dropdown.Toggle variant="light" id="dropdown-custom-1">{dropDownVal}</Dropdown.Toggle>
            <Dropdown.Menu className="demo1" style={{ width: '20rem' }}>
                <Form.Control 
                        type="text"
                        placeholder="Search" 
                        onChange={searchCountry} 
                        value={searchQuery} />

                {countryList.length > 0 ? countryList.map(list =>
                    <Dropdown.Item 
                        key={list.id} 
                        eventKey={list.code} 
                        active={selectedCountryCode === list.code}>
                        <div style={{ display: 'flex', justifyContent: "space-between" }}>
                           <p>{list.country}</p>
                           <p>{list.code}</p>
                        </div>
                    </Dropdown.Item>
                ): <Dropdown.Item disabled>No Records Found</Dropdown.Item>
                }

            </Dropdown.Menu>
            
            <Form.Control type="mobile" size="lg" placeholder="" block />


        </Dropdown>
        

    </Form.Group>

    )

}
export default Mobile;
