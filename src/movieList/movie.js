import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {faStar} from '@fortawesome/free-solid-svg-icons';

import Media from 'react-bootstrap/Media';
import FormControl from 'react-bootstrap/FormControl';

function Movie() {
  return (
    <div>
        <Media style={{backgroundColor: 'white'}}>
            <img
            className="align-self-start mr-3"
            src="/marvel_the_avengers.jpeg"
            alt="Generic placeholder"
            />
            <Media.Body>
            <h5>Media Heading</h5>
            <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
            </p>

            <p>
                Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                nascetur ridiculus mus.
            </p>
            <p>
                Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                fringilla. Donec lacinia congue felis in faucibus.
            </p>
            </Media.Body>
        </Media>
        <div style={{backgroundColor: 'white'}}>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>

                <p>
                    Donec sed odio dui. Nullam quis risus eget urna mollis ornare vel eu
                    leo. Cum sociis natoque penatibus et magnis dis parturient montes,
                    nascetur ridiculus mus.
                </p>
                <p>
                    Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque
                    ante sollicitudin commodo. Cras purus odio, vestibulum in vulputate at,
                    tempus viverra turpis. Fusce condimentum nunc ac nisi vulputate
                    fringilla. Donec lacinia congue felis in faucibus.
                </p>

                <FormControl as='textArea' style={{paddingLeft: '2px', paddingRight: '2rem'}}>
                    Type a comment here
                </FormControl>
        </div>
    </div>
  );
}

export default Movie;
