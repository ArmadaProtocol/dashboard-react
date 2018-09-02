import React from "react";
import PropTypes from "prop-types";
import { Button, Card, CardBody, CardHeader, Col, Modal, ModalBody, ModalFooter, ModalHeader, Row } from 'reactstrap';
import ToggleButton from 'react-toggle-button';

class Property extends React.Component {
  constructor(props){

    super(props)
    this.state = {
      large: false,
    };

    this.toggleLarge = this.toggleLarge.bind(this);
  }

  toggleLarge() {
    this.setState({
      large: !this.state.large,
    });
}
  
  render() {

    return (
      <div>
        <div class="row">
          <div class="col-md-12">
            <div class="card p-30">
              <div class="text-center">
                <h1>186 Military Road Unit #6</h1>
                <p class="m-b-0">Tuscaloosa, AL 35405</p>
                <hr />
              </div>
            </div>
          </div>
        </div>

        <div class="row">
          <div class="col-md-8">
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <img
                    src="images/property3.jpg"
                    id="property_specific_image"
                  />
                </div>
              </div>
            </div>
            <div class="row">
              <div class="col-md-12">
                <div class="card">
                  <div>
                    <h2>About this Property</h2>
                    <hr />
                  </div>
                  <div class="container-fluid">
                    <div align="left">
                      Lorem ipsum dolor sit amet, consectetur adipiscing elit,
                      sed do eiusmod tempor incididunt ut labore et dolore magna
                      aliqua. Ut enim ad minim veniam, quis nostrud exercitation
                      ullamco laboris nisi ut aliquip ex ea commodo consequat.
                      Duis aute irure dolor in reprehenderit in voluptate velit
                      esse cillum dolore eu fugiat nulla pariatur. Excepteur
                      sint occaecat cupidatat non proident, sunt in culpa qui
                      officia deserunt mollit anim id est laborum. Sed ut
                      perspiciatis unde omnis iste natus error sit voluptatem
                      accusantium doloremque laudantium, totam rem aperiam,
                      eaque ipsa quae ab illo inventore veritatis et quasi
                      architecto beatae vitae dicta sunt explicabo. Nemo enim
                      ipsam voluptatem quia voluptas sit aspernatur aut odit aut
                      fugit, sed quia consequuntur magni dolores eos qui ratione
                      voluptatem sequi nesciunt. Neque porro quisquam est, qui
                      dolorem ipsum quia dolor sit amet, consectetur, adipisci
                      velit, sed quia non numquam eius modi tempora incidunt ut
                      labore et dolore magnam aliquam quaerat voluptatem. Ut
                      enim ad minima veniam, quis nostrum exercitationem ullam
                      corporis suscipit laboriosam, nisi ut aliquid ex ea
                      commodi consequatur? Quis autem vel eum iure reprehenderit
                      qui in ea voluptate velit esse quam nihil molestiae
                      consequatur, vel illum qui dolorem eum fugiat quo voluptas
                      nulla pariatur? At vero eos et accusamus et iusto odio
                      dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores et quas molestias
                      excepturi sint occaecati cupiditate non provident,
                      similique sunt in culpa qui officia deserunt mollitia
                      animi, id est laborum et dolorum fuga. Et harum quidem
                      rerum facilis est et expedita distinctio. Nam libero
                      tempore, cum soluta nobis est eligendi optio cumque nihil
                      impedit quo minus id quod maxime placeat facere possimus,
                      omnis voluptas assumenda est, omnis dolor repellendus.
                      Temporibus autem quibusdam et aut officiis debitis aut
                      rerum necessitatibus saepe eveniet ut et voluptates
                      repudiandae sint et molestiae non recusandae. Itaque earum
                      rerum hic tenetur a sapiente delectus, ut aut reiciendis
                      voluptatibus maiores alias consequatur aut perferendis
                      doloribus asperiores repellat.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="card">
              <div class="text-center">
                <div class="container-fluid">
                  <br />
                  SUMMARY
                  <hr />
                  <div class="row">
                    <div class="col-md-6 property_focus_card">
                      <p>Asset Type</p>
                      <h3>Apartment</h3>
                      <p>Location</p>
                      <h3>Tuscaloosa</h3>
                    </div>
                    <div class="col-md-6 property_focus_card">
                      <p>Structure</p>
                      <h3>Equity</h3>
                      <p>Construction Status</p>
                      <h3>Complete</h3>
                    </div>
                  </div>
                  PROPERTY
                  <hr />
                  <div class="row">
                    <div class="col-md-6 property_focus_card">
                      <p>Valuation</p>
                      <h3>$148,317</h3>
                      <p>Price/sqft.</p>
                      <h3>$105.94</h3>
                      <p>Built in</p>
                      <h3>2014</h3>
                    </div>
                    <div class="col-md-6 property_focus_card">
                      <p>Size</p>
                      <h3>1400 sqft.</h3>
                      <p>Bed / Bath</p>
                      <h3>2br / 1.5ba</h3>
                      <p>Neighborhood Rating</p>
                      <h3>8.8</h3>
                    </div>
                  </div>
                  OTHER
                  <hr />
                  <div class="row">
                    <div class="col-md-6 property_focus_card">
                      <p>Property Manager</p>
                      <h3>TMC Partners</h3>
                      <p>Tax</p>
                      <h3>10%</h3>
                    </div>
                    <div class="col-md-6 property_focus_card">
                      <p>Debt</p>
                      <h3>$14,000</h3>
                    </div>
                  </div>
                  TRADE
                  <hr />
                  <div class="row">
                    <div class="col-md-12">

                      <Button color="danger" size="lg"onClick={this.toggleLarge} className="mr-1">Trade Tokens</Button>
                      <Modal isOpen={this.state.large} toggle={this.toggleLarge}
                             className={'modal-lg ' + this.props.className}>
                        <ModalHeader toggle={this.toggleLarge}>
                          <h3>Trade Tokens</h3>
                        </ModalHeader>
                        <ModalBody>
                          <b>PROPERTY:</b>
                          <div>
                            186 Military Road Unit #6
                          </div>
                          <hr />
                          <b>TRADE TYPE:</b>
                          <div class="form-row align-items-center">
                                                        

                            <div class="col-auto my-1" style={{width: '130px'}}>
                                <select class="custom-select mr-sm-2" id="inlineFormCustomSelect">
                                  <option selected>Choose...</option>
                                  <option value="1">Buy</option>
                                  <option value="2">Sell</option>
                                </select>
                            </div>



                          </div>
                          <hr />
                          <b>TOKEN ASK PRICE:</b>
                          <div>
                            <div class="form-group" style={{width: '130px'}}>
                              <input type="text" class="form-control" id="usr" />
                            </div>
                          </div>
                          <hr />
                          <b>QUANTITY:</b>
                          <div>
                            <div class="form-group" style={{width: '130px'}}>
                              <input type="text" class="form-control" id="usr" />
                            </div>
                          </div>
                        </ModalBody>
                        <ModalFooter>
                          <Button color="secondary" onClick={this.toggleLarge}>Cancel</Button>
                          <Button color="success" onClick={this.toggleLarge}>Submit</Button>{' '}
                        </ModalFooter>
                      </Modal>


                      <br/>
                      <br/>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Property;
