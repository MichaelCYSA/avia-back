
const amadeusApi = require('./utils/amadeus')

class Services {
  async oneWay(
    req,
    res
  ) {
    try {
        const obj = req.body
        amadeusApi.shopping.flightOffersSearch.post(JSON.stringify({
          "currencyCode": obj.currencyCode || 'USD',
          "originDestinations": obj.originDestinations,
          "travelers": obj.travelers,
          "sources": [
            "GDS"
          ],
          "searchCriteria": {
            "maxFlightOffers": 50,
            "flightFilters": {
              "cabinRestrictions": obj.cabinRestrictions,
            }
          }
        })).then(function(response){
          res.status(200).json({data: response.data, error: null});
      }).catch(function(responseError){
          res.status(400).json({data: null, error: responseError})
      });
    
    } catch (e) {
      res.status(500).json({message: 'server error'})
    }
  }



  async roundTrip(
    req,
    res
  ) {
    try {
        const obj = req.body
        amadeusApi.shopping.flightOffersSearch.get({
          originLocationCode: obj.originLocationCode,
          destinationLocationCode: obj.destinationLocationCode,
          departureDate: obj.departureDate,
          adults: obj.adults,
          children: obj.children,
          infants: obj.infants,
          travelClass: obj.cabin,
          currencyCode: obj.currencyCode || 'USD',
          returnDate: obj.returnDate
        }).then(function(response){
          res.status(200).json({data: response.data, error: null});
        }).catch(function(responseError){
          res.status(400).json({data: null, error: responseError})
        });
    } catch (e) {
      res.status(500).json({message: 'server error'})
    }
  }
}
module.exports = new Services();

//ECONOMY PREMIUM_ECONOMY

//ADULT, CHILD, SENIOR, YOUNG, HELD_INFANT, SEATED_INFANT, STUDENT