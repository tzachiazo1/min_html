# Stock Sicker
> A stock ticker is a report of the price for certain securities, updated continuously throughout the trading session by the various stock exchanges. A "tick" is any change in price, whether that movement is up or down.

## What It Does
The stock ticker displays a list of favorite stocks with their current value and daily change in percentages and value.

Stocks can be added or removed from the list. Their order in the list can be changed. The list can be filtered by some conditions.

The selected symbols should be saved locally.

The Stocks data should be updated periodically (every 5 minutes) or when triggerred by the user.

There are two screens needs to be implemented - "Stocks List" and "Add Stocks".

## Stocks List Page
### Header
The header should have a logo, an edit button and refresh button.
When clicking on the referesh button, the stocks should be updated.

The edit button should toggle Edit/View mode (more below).

### List of Stocks
This is a a table where each line represents a stock.
Each line should look like this:

```
Symbol (Name) | Price | Daily Change
```

The `Daily Change` should be changed on click:
- Change in percentage (+0.15%)
- Change in value (+0.01)

in `Edit` mode, the following should be added
- X button to remove a stock.
- Up/Down arrows to decide the order of the displayed stock.

### Filtering
By default, this section is collapsed and opens on click.
It allows filtering the stocks by the following criterias:
- By Symbol/Name: a single input that filters on both symbol and name (at least one must be satisfied to disply the stock).
- By Trend: A select box, selecting between All/Losing/Gaining.
- By Price Range: From __ To __. (TODO - not defined well enough).

Filters will be reflected by clicking the Apply button.

### Footer
A single Add Stocks button to move to Add Stocks page

## Add Stocks Page
### Header
The header should include a serch input and a search button. The search is based on the stock Symbol only.

Display an empty view if didn't search a stock yet and an error message if search didn't match any stock.

### Possible Stocks
A list of possible stocks (by their symbol). Each line represnets a stock should look like this:
```
Symbol (Name) | Type | Exchange Name
```

`Type` is either "Stock" or "Futures".

Once results apper, the user can select multiple stocks and click the `Add` button. Clicking will navigate back to the stocks list screen.

The cancel button will navigate to the stocks list screen without adding stocks.

## Retrieving Data
### Static Mocked Data
As a first step, use the data structures below.

1. Stocks Symbol List. Defines which stocks needs to be displayed and their order
```json
[
  "WIX",
  "MSFT",
  "YHOO"
]
```

2. Stocks Data. Data per each symbol.
```json
[
  {
    "Symbol": "WIX",
    "Name": "Wix.com Ltd.",
    "Change": "0.750000",
    "PercentChange": "+1.51%",
    "LastTradePriceOnly": "76.099998"
  },
  {
    "Symbol": "MSFT",
    "Name": "Microsoft Corporation",
    "PercentChange": "-2.09%",
    "Change": "-0.850006",
    "LastTradePriceOnly": "69.620003"
  },
  {
    "Symbol": "YHOO",
    "Name": "Yahoo! Inc.",
    "Change": "0.279999",
    "PercentChange": "+1.11%",
    "LastTradePriceOnly": "50.599998"
  }
]
```

3. Stocks Symbol Data. When searching for partial Yahoo symbol, for example `YHO` (instead of `YHOO`), this it the data that returns:

```json
[
  {
    "exchange": "NMS",
    "exchange_name": "NASDAQ",
    "name": "Yahoo! Inc.",
    "symbol": "YHOO",
    "type": "Stock"
  },
  {
    "exchange": "MUN",
    "exchange_name": "Munich",
    "name": "YAHOO INC.  DL-,001",
    "symbol": "YHO.MU",
    "type": "Stock"
  },
  {
    "exchange": "EBS",
    "exchange_name": "Swiss",
    "name": "Yahoo! Inc.",
    "symbol": "YHOO.SW",
    "type": "Stock"
  },
  {
    "exchange": "SGO",
    "exchange_name": "Santiago Stock Exchange ",
    "name": "Yahoo! Inc.",
    "symbol": "YHOO.SN",
    "type": "Stock"
  },
  {
    "exchange": "PNK",
    "exchange_name": "OTC Markets",
    "name": "Yellowhead Mining Inc.",
    "symbol": "YHMGF",
    "type": "Stock"
  }
]
```

#### API

To get the required information about symbols and stock, we use the Yahoo finance platform. Yahoo introduces `YQL` (Yahoo Query Language) which is very similar to SQL, but used in this platform. Data returns in JSON format.

There are two APIs we're going to use.

First one we use will be to retrieve the data for all the required stocks (by their symbols)

`
https://query.yahooapis.com/v1/public/yql?q=select * from yahoo.finance.quotes where symbol in ("YHOO", "MSFT")&format=json&env=store://datatables.org/alltableswithkeys`

Second one we will use will be to retrieve possible symbols (by a partial/full symbol search, for example "YHO" instead of "YHOO")

//TODO - this isn't working yet
`https://query.yahooapis.com/v1/public/yql?q=select * from pm.finance.autocomplete where auto_complete_str ="YHO"&format=json&env=store://datatables.org/alltableswithkeys`

More about YQL:
1. Guide: https://developer.yahoo.com/yql/guide/
2. Playground https://developer.yahoo.com/yql/console/#h=select+*+from+pm.finance.autocomplete+where+auto_complete_str++%3D%22YHO%22


### Storing data
You should use the `LocalStorage` mechanism to save your favorite stocks and their order.
When the app start - use the data from the `LocalStorage`. If there isn't data there, use the "Stocks Symbol List" data defined previously.


### Bonus Section
#### Animations
* When moving between screens.
* When list items appear.

#### Stocks List
* Filter the stocks in the Stocks List screen without clicking on the apply button (on-the-fly filtering)

#### Add Stocks Page
* Search for stocks withouth clicking on the search button (on-the-fly filtering). Beware from making multiple HTTP requests.

#### Stock Detail Page (Bonus)
This screen is up to you to implement. It should display additional data of a specific stock.
For example, latest news about the stack / more numerical data / change graph, etc... Go wild!
