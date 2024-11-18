# Order Cryptocurrency

This project implements a percentage-based order placement system for market trading. Users can view available markets, select a market, and place buy or sell orders based on a percentage of the available currency volume. The project is built using Vite, React, React Router, SCSS, Sass, and the Decimal library.

## Features

- **Market List Page**:
  - Displays available markets with pagination.
  - Markets are separated into two tabs based on the currency type (IRT and USDT).
  - Each market is represented by a card containing relevant information fetched from the server.
  - Pagination is managed on the client side to show 10 items per page.

- **Market Detail Page**:
  - Displays three tabs: Buy Orders, Sell Orders, and Trades.
  - Users can view up to 10 items in each tab.
  - For Buy/Sell Orders:
    - Displays `remain`, `price`, and `value` for each order.
    - Provides aggregate values (sum of `remain` and `value`, and weighted average `price`).
  - For Trades:
    - Displays `match_amount`, `price`, and `time` for each trade.
  - Users can input a percentage to calculate the corresponding `remain`, `price`, and `value` for buy/sell orders.
  - The results are dynamically updated every 3 seconds.

## Tech Stack

- **Frontend**:
  - React with React Router for routing.
  - SCSS and Sass for styling.
  - Decimal.js library for precise decimal calculations.

- **Backend API** (External):
  - Fetches market data, buy/sell orders, and trades from the following API endpoints:
    - Market List: `https://api.bitpin.ir/v1/mkt/markets/`
    - Buy Orders: `https://api.bitpin.org/v2/mth/actives/<market_id>/?type=buy`
    - Sell Orders: `https://api.bitpin.org/v2/mth/actives/<market_id>/?type=sell`
    - Trades: `https://api.bitpin.org/v1/mth/matches/<market_id>/`

## Setup

1. Clone this repository:
   ```bash
   git clone https://github.com/Saamiraa/bit-pin-assignment.git
2. cd <project-directory>

3. npm install
 
4. npm run dev

