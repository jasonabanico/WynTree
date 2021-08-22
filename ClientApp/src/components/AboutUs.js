import React, { Component } from 'react';

export class AboutUs extends Component {
    static displayName = AboutUs.name;

    render() {
        return (
            <div>
                <h1 class="h3">About WynTree</h1>

                <p>
                    The WynTree Team is based in Wyndham, the fastest growing city in Victoria with the lowest percentage of tree canopy cover at 2.1% and lowest mean average rainfall rate in the Greater Melbourne Area.
                </p>

                <p>
                    We are establishing community-owned tree nurseries and planting teams through the co-operatives we are in the process of organising. We believe NSW and Victoria are facing similar challenges when it comes to the need to come up with more vibrant public spaces using under-utilised government owned land but our need to increase canopy cover is much more pronounced. The solution we are coming up with for Wyndham City would be very applicable to most parts of NSW.
                </p>

            </div>
        );
    }
}
