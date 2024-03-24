import React from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

function SearchBar({ onSearch }) {
    const handleSearch = (event) => {
        const query = event.target.value;
        onSearch(query);
    };

    return (
        <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" onChange={handleSearch} />
            <Button variant="outline-success">Search</Button>
        </Form>
    );
}

export default SearchBar;
