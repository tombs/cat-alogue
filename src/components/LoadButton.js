import { useState, useEffect } from 'react';

import Button from 'react-bootstrap/Button'

function simulateNetworkRequest() {
    return new Promise((resolve) => setTimeout(resolve, 2000));
  }
  
function LoadingButton(networkRequest) {
const [isLoading, setLoading] = useState(false);

useEffect(() => {
    if (isLoading) {
    simulateNetworkRequest().then(() => {
        setLoading(false);
    });
    }
}, [isLoading]);

const handleClick = () => setLoading(true);

return (
    <Button
    variant="primary"
    size="lg"
    disabled={isLoading}
    onClick={!isLoading ? handleClick : null}
    >
    {isLoading ? 'Loading Cats…' : 'Load More'}
    </Button>
);
}

export default LoadingButton;