import React, { Component } from 'react';

export class Home extends Component {
    static displayName = Home.name;

    render() {
        return (
            <div>
                <p>
                    <img src="/img/map.png" />
                </p>

                <hr />

                <p>
                    <button type="button" class="btn btn-danger mr-2">
                        <i class="fas fa-heart"></i>&nbsp;
                        Adopt a Tree
                    </button>
                    <button type="button" class="btn btn-primary mr-2">
                        <i class="fas fa-tag"></i>&nbsp;
                        Name a Tree
                    </button>
                    <button type="button" class="btn btn-success mr-2">
                        <i class="fas fa-gift"></i>&nbsp;
                        Gift a Tree
                    </button>
                </p>

                <hr />

                <h2 class="h4">The WynTree Solution</h2>

                <div class="row">

                    <div class="col-lg-4 col-md-6 col-sm-12 mr-2 mb-3">
                        <div class="card">
                            <img class="card-img-top" src="/img/planning.png" />
                            <div class="card-body">
                                <h5 class="card-title">Survey</h5>
                                <p class="card-text">
                                    Identify the suitable location for Urban Forests using Public Spaces GIS Layers on&nbsp;
                                    <a href="https://www.planningportal.nsw.gov.au/spatialviewer/#/find-a-property/address" target="_blank">
                                        the ePlanning
                                        Spacial Viewer</a>, <a href="https://www.planningportal.nsw.gov.au/opendata/dataset/sepp-sydney-region-growth-centres-2006" target="_blank">
                                        the ePlanning Data Portal</a> and other relevant data sets.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mr-2 mb-3">
                        <div class="card">
                            <img class="card-img-top" src="/img/park.png" />
                            <div class="card-body">
                                <h5 class="card-title">Design</h5>
                                <p class="card-text">
                                    Designing the Urban Forests with focus on accessibility, water management, variety of native trees and shrubs and use of Smart City technology
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mr-2 mb-3">
                        <div class="card">
                            <img class="card-img-top" src="/img/tree.png" />
                            <div class="card-body">
                                <h5 class="card-title">Locate</h5>
                                <p class="card-text">
                                    Identifying GPS co-ordinates of all trees and significant shrubs, and
                                    mapping existing and planned tree locations.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mr-2 mb-3">
                        <div class="card">
                            <img class="card-img-top" src="/img/plant.png" />
                            <div class="card-body">
                                <h5 class="card-title">Plant and Nurture</h5>
                                <p class="card-text">
                                    Incubate local nurseries that will grow seedlings, and organise volunteers and cooperatives
                                    to plant the trees.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div class="col-lg-4 col-md-6 col-sm-12 mr-2 mb-3">
                        <div class="card">
                            <img class="card-img-top" src="/img/hug-tree.png" />
                            <div class="card-body">
                                <h5 class="card-title">Engage</h5>
                                <p class="card-text">
                                    Engage with the community, by allowing the public adopt, name, and gift uniquely identified trees.
                                </p>
                            </div>
                        </div>
                    </div>

                </div>

                <hr />

                <div class="card">
                    <div class="card-body">
                        <h2 class="h4">Our Passion for Trees and Urban Forests</h2>

                        <p>
                            The WynTree Team is based in Wyndham, the fastest growing city in Victoria with the lowest percentage of tree canopy cover at 2.1% and lowest mean average rainfall rate in the Greater Melbourne Area.
                        </p>

                        <p>
                            We are establishing community-owned tree nurseries and planting teams through the co-operatives we are in the process of organising. We believe NSW and Victoria are facing similar challenges when it comes to the need to come up with more vibrant public spaces using under-utilised government owned land but our need to increase canopy cover is much more pronounced. The solution we are coming up with for Wyndham City would be very applicable to most parts of NSW.
                        </p>
                    </div>
                </div>


            </div >
        );
    }
}
