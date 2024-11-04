[![Banner](banner.png)](https://www.capsolver.com/?utm_source=github&utm_medium=repo&utm_campaign=scraping&utm_term=datadome-bp)

# DataDome Cookie Generator

DataDome Cookie Generator is a project designed to interact with [DataDome's API](https://www.datadome.co/) to generate secure cookies. DataDome is a renowned solution specializing in bot mitigation and protecting websites from various malicious activities. This project aimed to aid interactions with sites that utilize DataDome for protection, such as `footlocker.com`, `asus.com`, `mcdonalds.com` and so on.

> [!TIP]
> Alternatively, you can use [capsolver.com](https://www.capsolver.com) for doing things more easily.

## Table of Contents

1. [Prerequisites](#prerequisites)
2. [Installation](#installation)
3. [Usage](#usage)
4. [API Endpoints](#api-endpoints)
   - [Generate Cookie](#generate-cookie)
5. [Related Projects](#related-projects)
6. [Disclaimer](#disclaimer)

## Prerequisites

- Node.js (>= 13.2.0)

## Installation

1. Clone the repository.
   ```shell
   git clone https://github.com/ceodavee/datadome-bp.git
   ```

2. Navigate to the project directory.
   ```shell
   cd datadome-bp
   ```

3. Install the dependencies.
   ```shell
   npm install
   ```

## Usage

1. Start the server by running the following command:
   ```shell
   node --experimental-modules source/main.mjs
   ```

2. The server will start and will be available at http://localhost:{configured-port}/cookie-generator.

## API Endpoints

### Generate Cookie

- **Endpoint:**
  ```
  POST /cookie-generator
  ```
- **Request Body:**
    Content-Type has to be `application/json`
  ```json
  {
    "targetDomain": "http://example.com"
  }
  ```
- **Success Response:**
  ```json
  {
    "raw": "raw_cookie_string",
    "cookie": "cookie_name=cookie_value",
    "value": "cookie_value"
  }
  ```
- **Error Response:**
  ```json
  {
    "Error": "Error Message"
  }
  ```

## Related Projects

In one of my older projects, [Footlocker Bot](https://github.com/ceodavee/footlocker-bot), there is also a method to bypass DataDome, albeit with a different approach. You may find it insightful to check out this method as well; however, please note that the DataDome bypass in the Footlocker Bot project is no longer operational. The functionality of this current project is not verified recently.

## Disclaimer

This project was operational about 0.5 years ago from the time of this documentation. It may not be working anymore as it has not been tested recently. Please try and verify it in your environment, and use it responsibly, respecting all relevant laws and website terms of service. 

## Star History

<a href="https://star-history.com/#d-suter/datadome-bp&Date">
 <picture>
   <source media="(prefers-color-scheme: dark)" srcset="https://api.star-history.com/svg?repos=d-suter/datadome-bp&type=Date&theme=dark" />
   <source media="(prefers-color-scheme: light)" srcset="https://api.star-history.com/svg?repos=d-suter/datadome-bp&type=Date" />
   <img alt="Star History Chart" src="https://api.star-history.com/svg?repos=d-suter/datadome-bp&type=Date" />
 </picture>
</a>
