/**
 * @typedef {Object} Position
 * Conforms to https://jsonresume.org/schema/
 *
 * @property {string} name - Name of the company
 * @property {string} position - Position title
 * @property {string} url - Company website
 * @property {string} startDate - Start date of the position in YYYY-MM-DD format
 * @property {string|undefined} endDate - End date of the position in YYYY-MM-DD format.
 * If undefined, the position is still active.
 * @property {string|undefined} summary - html/markdown summary of the position
 * @property {string[]} highlights - plain text highlights of the position (bulleted list)
 */
const work = [
  {
    name: 'Target',
    position: 'Senior Data Scientist',
    url: 'https://target.com',
    startDate: '2021-06-01',
    summary: 'Pricing & Promotions',
    highlights: [
      'Applied ML techniques to predict financial performance for groups of promotions (umbrellas) with a 6 month horizon, '
      + 'resulting in reduced planner interaction and a 20% increase in forecast accuracy.',
      'Developed an algorithm to match groups of promotions (umbrellas) based on '
      + 'item sets, umbrella names, and execution dates using transaction-context product embeddings '
      + 'and umbrella name embeddings using 2 years of historical sales data',
      'Designed and implemented an end-to-end framework to find past umbrella matches, '
      + 'generate features from sales history, then train &amp; score an elastic net regression model.',

    ],
  },
  {
    name: 'Target',
    position: 'Data Scientist',
    url: 'http://target.com',
    startDate: '2020-12-01',
    endDate: '2021-06-01',
    summary: 'Pricing & Promotions',
    highlights: [
      'Created a POC to automate promotion and markdown forecasts for planning, '
      + 'pricing, and operations teams to reduce workload, '
      + 'improve promotion effectiveness, and increase promotional revenue.',
      'Built a division-week level forecast to optimize promotional forecasts '
      + 'on margin and discount allocation for over 13 figures worth of inventory.',
      'Improved baseline sales model by implementing changes to promotion '
      + 'attribution and incremental sales attribution, resulting in '
      + 'more accurate promotion planning.',
    ],
  },
  {
    name: 'Target',
    position: 'Software Engineer',
    url: 'https://target.com',
    startDate: '2019-08-01',
    endDate: '2020-12-01',
    summary: 'Clearance Pricing',
    highlights: [
      'Applied machine learning techniques to solve an enterprise initiative of '
      + 'increasing clearance revenue by $100M+ for the 2019 fiscal year '
      + 'through price optimization. Collaborated with a multidisciplinary team '
      + 'to build model trust, resulting in a product launch within home, '
      + 'beauty and essentials product categories.',
      'Designed and implemented a modular backtesting framework that simulated '
      + 'clearance pricing optimization model predictions using 3 years of '
      + 'historical data, which was used as the primary tool to determine the '
      + 'financial risk of deploying a model for over 12 figures worth of '
      + 'store inventory. Accelerated risk assessment by showing model '
      + 'performance over different departments / times of the year, resulting '
      + 'in reduced A/B testing.',
      'Designed and implemented a parallel-testing framework simulated '
      + 'alternate optimization model predictions within active A/B tests for '
      + 'over 9 figures worth of inventory, allowing for faster model '
      + 'iterations and quicker adjustments.',
      'Presented optimization model and testing frameworks to different groups '
      + 'inside and outside of pricing, including at a company-wide convention.',
    ],
  },
];

export default work;
