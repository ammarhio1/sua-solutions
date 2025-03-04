import React from 'react';

const Chapter1Page = () => {
  // Define styles as an object
  const styles = {
    body: {
      fontFamily: 'Arial, sans-serif',
      margin: '20px',
    },
    heading: {
      color: '#2c3e50',
    },
    entry: {
      marginLeft: '20px',
      marginBottom: '20px',
    },
    bold: {
      fontWeight: 'bold',
    },
    margin: {
      marginLeft: '40px',
    },
  };

  return (
    <div style={styles.body}>
      <h1>Answers to Problems</h1>

      <h2>Problem 1</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Answer:</span> D</p>
      </div>

      <h2>Problem 2</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Answer:</span> B</p>
      </div>

      <h2>Problem 3</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Answer:</span> C</p>
      </div>

      <h2>Problem 4</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Answer:</span> B</p>
      </div>

      <h2>Problem 5</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Answer:</span> D</p>
      </div>

      <h2>Problem 6</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Acquisition price:</span> $2,295,000</p>
        <p><span style={styles.bold}>Equity income ($750,000 × 30%):</span> $225,000</p>
        <p><span style={styles.bold}>Dividends (90,000 shares × $1.00):</span> ($90,000)</p>
        <p><span style={styles.bold}>Investment in O’Fallon as of December 31:</span> $2,430,000</p>
      </div>

      <h2>Problem 7</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Acquisition price:</span> $700,000</p>
        <p><span style={styles.bold}>Income accruals:</span></p>
        <div style={styles.margin}>
          <p>2023—$170,000 × 20%: $34,000</p>
          <p>2024—$210,000 × 20%: $42,000</p>
        </div>
        <p><span style={styles.bold}>Amortization:</span></p>
        <div style={styles.margin}>
          <p>2023: ($10,000)</p>
          <p>2024: ($10,000)</p>
        </div>
        <p><span style={styles.bold}>Dividends:</span></p>
        <div style={styles.margin}>
          <p>2023—$70,000 × 20%: ($14,000)</p>
          <p>2024—$70,000 × 20%: ($14,000)</p>
        </div>
        <p><span style={styles.bold}>Investment in Martes, December 31, 2024:</span> $728,000</p>
        <p><span style={styles.bold}>Acquisition price of Martes:</span> $700,000</p>
        <p><span style={styles.bold}>Acquired net assets (book value) ($3,000,000 × 20%):</span> ($600,000)</p>
        <p><span style={styles.bold}>Excess cost over book value to patent:</span> $100,000</p>
        <p><span style={styles.bold}>Annual amortization (10-year remaining life):</span> $10,000</p>
      </div>

      <h2>Problem 8</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Purchase price of Johnson stock:</span> $500,000</p>
        <p><span style={styles.bold}>Book value of Johnson ($900,000 × 40%):</span> ($360,000)</p>
        <p><span style={styles.bold}>Cost in excess of book value:</span> $140,000</p>
        <p><span style={styles.bold}>Remaining Annual Amortization:</span></p>
        <div style={styles.margin}>
          <p>Building ($140,000 × 40%): $56,000 (7 years, $8,000/year)</p>
          <p>Trademark ($210,000 × 40%): $84,000 (10 years, $8,400/year)</p>
        </div>
        <p><span style={styles.bold}>Total:</span> $16,400</p>
        <p><span style={styles.bold}>Investment purchase price:</span> $500,000</p>
        <p><span style={styles.bold}>Basic income accrual ($90,000 × 40%):</span> $36,000</p>
        <p><span style={styles.bold}>Amortization:</span> ($16,400)</p>
        <p><span style={styles.bold}>Dividends declared ($30,000 × 40%):</span> ($12,000)</p>
        <p><span style={styles.bold}>Investment in Johnson:</span> $507,600</p>
      </div>

      <h2>Problem 9</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Answer:</span> D</p>
        <p><span style={styles.bold}>Purchase price of Max stock:</span> $600,000</p>
        <p><span style={styles.bold}>Book value of Max stock ($1,200,000 × 40%):</span> ($480,000)</p>
        <p><span style={styles.bold}>Goodwill:</span> $120,000</p>
        <p><span style={styles.bold}>Life of goodwill:</span> Indefinite</p>
        <p><span style={styles.bold}>Annual amortization:</span> $0</p>
        <p><span style={styles.bold}>Cost on January 1, 2023:</span> $600,000</p>
        <p><span style={styles.bold}>2023 Income accrued ($140,000 × 40%):</span> $56,000</p>
        <p><span style={styles.bold}>2023 Dividend ($50,000 × 40%):</span> ($20,000)</p>
        <p><span style={styles.bold}>2024 Income accrued ($140,000 × 40%):</span> $56,000</p>
        <p><span style={styles.bold}>2024 Dividend ($50,000 × 40%):</span> ($20,000)</p>
        <p><span style={styles.bold}>2025 Income accrued ($140,000 × 40%):</span> $56,000</p>
        <p><span style={styles.bold}>2025 Dividend ($50,000 × 40%):</span> ($20,000)</p>
        <p><span style={styles.bold}>Investment in Max, 12/31/25:</span> $708,000</p>

      <h2>Problem 10</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Answer:</span> D</p>
      </div>

      <h2>Problem 11</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Gross profit rate (GPR):</span> $15,000 ÷ $75,000 = 20%</p>
        <p><span style={styles.bold}>Inventory remaining at year-end:</span> $30,000</p>
        <p><span style={styles.bold}>GPR:</span> × 20%</p>
        <p><span style={styles.bold}>Gross profit:</span> $6,000</p>
        <p><span style={styles.bold}>Ownership:</span> × 35%</p>
        <p><span style={styles.bold}>Intra-entity gross profit—deferred:</span> $2,100</p>
      </div>

      <h2>Problem 12</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Purchase price of Steinbart shares:</span> $530,000</p>
        <p><span style={styles.bold}>Book value of Steinbart shares ($1,200,000 × 40%):</span> ($480,000)</p>
        <p><span style={styles.bold}>Trade name:</span> $50,000</p>
        <p><span style={styles.bold}>Remaining life of trade name:</span> 20 years</p>
        <p><span style={styles.bold}>Annual amortization:</span> $2,500</p>
        <p><span style={styles.bold}>2023 Gross profit rate:</span> $30,000 ÷ $100,000 = 30%</p>
        <p><span style={styles.bold}>2024 Gross profit rate:</span> $54,000 ÷ $150,000 = 36%</p>
        <p><span style={styles.bold}>2024—Equity income in Steinbart:</span></p>
        <div style={styles.margin}>
          <p>Income accrual ($110,000 × 40%): $44,000</p>
          <p>Amortization: ($2,500)</p>
          <p>Recognition of 2023 deferred gross profit ($25,000 × 30% GPR × 40% ownership): $3,000</p>
          <p>Deferral of 2024 intra-entity gross profit ($45,000 × 36% GPR × 40% ownership): ($6,480)</p>
        </div>
        <p><span style={styles.bold}>Equity income in Steinbart—2024:</span> $38,020</p>
      </div>

      <h2>Problem 13</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Purchase price:</span> $1,160,000</p>
        <p><span style={styles.bold}>Basic 2024 equity accrual ($260,000 × 40%):</span> $104,000</p>
        <p><span style={styles.bold}>Amortization of copyright:</span></p>
        <div style={styles.margin}>
          <p>Excess payment ($1,160,000 – $820,000 = $340,000)</p>
          <p>to copyright allocated over 10-year remaining life: ($34,000)</p>
        </div>
        <p><span style={styles.bold}>Dividends (50,000 × 40%):</span> ($20,000)</p>
        <p><span style={styles.bold}>Investment account balance at year-end:</span> $1,210,000</p>
      </div>

      <h2>Problem 14</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>a. Purchase price:</span> $2,290,000</p>
        <p><span style={styles.bold}>Equity income accrual ($720,000 × 35%):</span> $252,000</p>
        <p><span style={styles.bold}>Other comprehensive loss accrual ($100,000 × 35%):</span> ($35,000)</p>
        <p><span style={styles.bold}>Dividends (20,000 × 35%):</span> ($7,000)</p>
        <p><span style={styles.bold}>Investment in Sharon at December 31, 2024:</span> $2,500,000</p>
        <p><span style={styles.bold}>b. Equity in Earnings of Sharon:</span> $252,000 (does not include OCI share which is reported separately).</p>
      </div>

      <h2>Problem 15</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>a. Acquisition price:</span> $2,700,000</p>
        <p><span style={styles.bold}>Book value acquired ($5,175,000 × 20%):</span> $1,035,000</p>
        <p><span style={styles.bold}>Excess payment:</span> $1,665,000</p>
        <p><span style={styles.bold}>Excess fair value:</span></p>
        <div style={styles.margin}>
          <p>Computing equipment ($700,000 × 20%): $140,000</p>
          <p>Patented technology ($3,900,000 × 20%): $780,000</p>
          <p>Trademark ($1,850,000 × 20%): $370,000</p>
        </div>
        <p><span style={styles.bold}>Goodwill:</span> $375,000</p>
        <p><span style={styles.bold}>Amortization:</span></p>
        <div style={styles.margin}>
          <p>Computing equipment ($140,000 ÷ 7): $20,000</p>
          <p>Patented technology ($780,000 ÷ 3): $260,000</p>
          <p>Trademark (indefinite): $0</p>
          <p>Goodwill (indefinite): $0</p>
        </div>
        <p><span style={styles.bold}>Annual amortization:</span> $280,000</p>
        <p><span style={styles.bold}>b. Basic equity accrual 2023 ($1,800,000 × 20%):</span> $360,000</p>
        <p><span style={styles.bold}>Amortization—2023:</span> ($280,000)</p>
        <p><span style={styles.bold}>Equity in 2023 earnings of Sauk Trail:</span> $80,000</p>
        <p><span style={styles.bold}>Basic equity accrual 2024 ($1,985,000 × 20%):</span> $397,000</p>
        <p><span style={styles.bold}>Amortization—2024:</span> ($280,000)</p>
        <p><span style={styles.bold}>Equity in 2024 earnings of Sauk Trail:</span> $117,000</p>
        <p><span style={styles.bold}>c. Acquisition price:</span> $2,700,000</p>
        <p><span style={styles.bold}>Equity in 2023 earnings of Sauk Trail:</span> $80,000</p>
        <p><span style={styles.bold}>Dividends—2023 ($150,000 × 20%):</span> ($30,000)</p>
        <p><span style={styles.bold}>Investment in Sauk Trail, 12/31/23:</span> $2,750,000</p>
        <p><span style={styles.bold}>Investment in Sauk Trail, 12/31/23:</span> $2,750,000</p>
        <p><span style={styles.bold}>Equity in 2024 earnings of Sauk Trail:</span> $117,000</p>
        <p><span style={styles.bold}>Dividends—2024 ($160,000 × 20%):</span> ($32,000)</p>
        <p><span style={styles.bold}>Investment in Sauk Trail, 12/31/24:</span> $2,835,000</p>
      </div>

      <h2>Problem 16</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>a. Acquisition price:</span> $60,000</p>
        <p><span style={styles.bold}>Book value—assets minus liabilities ($125,000 × 40%):</span> $50,000</p>
        <p><span style={styles.bold}>Excess payment:</span> $10,000</p>
        <p><span style={styles.bold}>Value of patent in excess of book value ($15,000 × 40%):</span> $6,000</p>
        <p><span style={styles.bold}>Goodwill:</span> $4,000</p>
        <p><span style={styles.bold}>Amortization:</span></p>
        <div style={styles.margin}>
          <p>Patent ($6,000 ÷ 6): $1,000</p>
          <p>Goodwill: $0</p>
        </div>
        <p><span style={styles.bold}>Annual amortization:</span> $1,000</p>
        <p><span style={styles.bold}>Acquisition price:</span> $60,000</p>
        <p><span style={styles.bold}>Basic equity accrual 2023 ($30,000 × 40%):</span> $12,000</p>
        <p><span style={styles.bold}>Dividends—2023 ($10,000 × 40%):</span> ($4,000)</p>
        <p><span style={styles.bold}>Amortization—2023:</span> ($1,000)</p>
        <p><span style={styles.bold}>Investment in Chestnut, 12/31/23:</span> $67,000</p>
        <p><span style={styles.bold}>Basic equity accrual—2024 ($50,000 × 40%):</span> $20,000</p>
        <p><span style={styles.bold}>Dividends—2024 ($15,000 × 40%):</span> ($6,000)</p>
        <p><span style={styles.bold}>Amortization—2024:</span> ($1,000)</p>
        <p><span style={styles.bold}>Investment in Chestnut, 12/31/24:</span> $80,000</p>
        <p><span style={styles.bold}>b. Dividend income ($15,000 × 40%):</span> $6,000</p>
        <p><span style={styles.bold}>Increase in fair value ($75,000 – $68,000):</span> $7,000</p>
        <p><span style={styles.bold}>Investment income under fair value accounting—2024:</span> $13,000</p>
      </div>

      <h2>Problem 17</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Purchase price of Burks stock:</span> $210,000</p>
        <p><span style={styles.bold}>Book value of Burks stock ($360,000 × 40%):</span> ($144,000)</p>
        <p><span style={styles.bold}>Unidentified asset (goodwill):</span> $66,000</p>
        <p><span style={styles.bold}>Life:</span> Indefinite</p>
        <p><span style={styles.bold}>Annual amortization:</span> $0</p>
        <p><span style={styles.bold}>No intra-entity profit exists at year’s end because all of the transferred merchandise was used during the period.</span></p>
        <p><span style={styles.bold}>Journal Entries:</span></p>
        <div style={styles.margin}>
          <p>Investment in Burks, Inc. .......................................... 210,000</p>
          <p>Cash (or a Liability).............................................. 210,000</p>
          <p>To record acquisition of a 40 percent interest in Burks.</p>
          <p>Investment in Burks, Inc. .......................................... 32,000</p>
          <p>Equity in Investee Income ................................... 32,000</p>
          <p>To recognize 40 percent income earned during period by Burks, an equity method investment.</p>
          <p>Dividend Receivable.................................................. 10,000</p>
          <p>Investment in Burks, Inc...................................... 10,000</p>
          <p>To record investee dividend declaration.</p>
          <p>Cash............................................................................ 10,000</p>
          <p>Dividend Receivable. ........................................... 10,000</p>
          <p>To record collection of dividend from investee.</p>
        </div>
      </div>

      <h2>Problem 18</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>JANUARY 1, 2024 (Date significant influence is attained)</span></p>
        <p><span style={styles.bold}>Purchase price of 30% of Seida’s stock:</span> $600,000</p>
        <p><span style={styles.bold}>Fair value of original 10% investment in Seida:</span> $200,000</p>
        <p><span style={styles.bold}>Total fair value of 40% investment in Seida:</span> $800,000</p>
        <p><span style={styles.bold}>Book value of Seida stock ($1,850,000 × 40%):</span> ($740,000)</p>
        <p><span style={styles.bold}>Fair value in excess of book value:</span> $60,000</p>
        <p><span style={styles.bold}>Excess cost assigned to undervalued land ($120,000 × 40%):</span> ($48,000)</p>
        <p><span style={styles.bold}>Trademark:</span> $12,000</p>
        <p><span style={styles.bold}>Remaining life of Trademark:</span> ÷ 8 years</p>
        <p><span style={styles.bold}>Annual Amortization:</span> $1,500</p>
        <p><span style={styles.bold}>Journal Entries:</span></p>
        <div style={styles.margin}>
          <p>To record acquisition of Seida stock.</p>
          <p>Investment in Seida................................................... 600,000</p>
          <p>Cash ...................................................................... 600,000</p>
          <p>Investment in Seida................................................... 120,000</p>
          <p>Equity in Investee Income ................................... 120,000</p>
        </div>
      </div>
    </div><h2>Problem 18 (continued)</h2><div style={styles.entry}>
        <p><span style={styles.bold}>To record income for the year: 40% of the $300,000 reported income.</span></p>
        <div style={styles.margin}>
          <p>Equity in Investee Income ........................................ 1,500</p>
          <p>Investment in Seida ............................................. 1,500</p>
          <p>To record 2024 amortization.</p>
          <p>Dividend Receivable.................................................. 44,000</p>
          <p>Investment in Seida ............................................. 44,000</p>
          <p>To record dividend declaration from Seida (40% of $110,000).</p>
          <p>Cash............................................................................ 44,000</p>
          <p>Dividend Receivable. ........................................... 44,000</p>
          <p>To record collection of dividend from investee.</p>
        </div>
      </div><h2>Problem 19</h2><div style={styles.entry}>
        <p><span style={styles.bold}>Ending inventory ($200,000 – $85,000):</span> $115,000</p>
        <p><span style={styles.bold}>Gross profit percentage (GP $80,000 ÷ Sales $200,000):</span> 40%</p>
        <p><span style={styles.bold}>Gross profit on sale to Eckerle:</span> $46,000</p>
        <p><span style={styles.bold}>Ownership:</span> 30%</p>
        <p><span style={styles.bold}>Intra-entity gross profit—deferred:</span> $13,800</p>
        <p><span style={styles.bold}>Entry to Defer Intra-entity Gross Profit:</span></p>
        <div style={styles.margin}>
          <p>Equity in Investee Income ............................................ 13,800</p>
          <p>Investment in Eckerle .............................................. 13,800</p>
        </div>
      </div><h2>Problem 20</h2><div style={styles.entry}>
        <p><span style={styles.bold}>a. Equity in investee income:</span></p>
        <div style={styles.margin}>
          <p>Equity income accrual ($100,000 × 25%): $25,000</p>
          <p>Less: deferral of intra-entity gross profit (below): ($3,000)</p>
          <p>Less: patent amortization (given): ($10,000)</p>
          <p>Equity in investee income: $12,000</p>
        </div>
        <p><span style={styles.bold}>Deferral of intra-entity gross profit:</span></p>
        <div style={styles.margin}>
          <p>Remaining inventory—end of year: $32,000</p>
          <p>Gross profit percentage (GP $30,000 ÷ Sales $80,000): 37½%</p>
          <p>Profit within remaining inventory: $12,000</p>
          <p>Ownership percentage: 25%</p>
          <p>Intra-entity gross profit deferral: $3,000</p>
        </div>
        <p><span style={styles.bold}>b. In 2024, the deferral of $3,000 can be recognized by BuyCo’s use or sale of this inventory. Thus, the equity accrual for 2024 will be increased by $3,000 in that year. Recognition of this amount is simply being delayed from 2023 until 2024, the year when the goods are sold to customers outside the affiliated entity.</span></p>
        <p><span style={styles.bold}>c. The direction (upstream versus downstream) of the intra-entity transfer does not affect the above answers. However, as discussed in Chapter Five, a controlling interest (greater than 50% ownership) calls for a 100% gross profit deferral for downstream intra-entity transfers. In the presence of only significant influence, however, equity method accounting is identical regardless of whether an intra-entity transfer is upstream or downstream.</span></p>
      </div><h2>Problem 21</h2><div style={styles.entry}>
        <p><span style={styles.bold}>Equity method income accrual for 2024:</span></p>
        <div style={styles.margin}>
          <p>25 percent of $600,000 for ½ year: $75,000</p>
          <p>21 percent of $600,000 for ½ year: $63,000</p>
          <p>Total income accrual (no amortization or deferred gross profit): $138,000</p>
          <p>Gain on sale (below): $32,000</p>
          <p>Total income statement effect–2024: $170,000</p>
        </div>
        <p><span style={styles.bold}>Gain on sale of 12,000 shares of Sedgwick:</span></p>
        <div style={styles.margin}>
          <p>Cost of initial acquisition—2022: $1,480,000</p>
          <p>25% income accrual—2022: $85,000</p>
          <p>25% of dividends—2022: ($30,000)</p>
          <p>25% income accrual—2023: $120,000</p>
          <p>25% of dividends—2023: ($35,000)</p>
          <p>25% income accrual for ½ year—2024: $75,000</p>
          <p>25% of dividends for ½ year—2024: ($20,000)</p>
          <p>Book value of 75,000 shares on July 1, 2024: $1,675,000</p>
          <p>Cash proceeds from the sale: 12,000 shares × $25: $300,000</p>
          <p>Less: book value of shares sold: $1,675,000 × (12,000 ÷ 75,000): $268,000</p>
          <p>Gain on sale: $32,000</p>
        </div>
      </div><h2>Problem 22</h2><div style={styles.entry}>
        <p><span style={styles.bold}>a. In 2023, the fair-value method was appropriate. Thus, Eileen recognizes in its investment income 10 percent of Bravo’s dividends declared along with the change in the investment’s fair value.</span></p>
        <p><span style={styles.bold}>b. The assumption is that Eileen’s level of ownership now provides the company with the ability to exercise significant influence over the operating and financial policies of Bravo. Factors that indicate such a level of influence are described in the textbook and include representation on the investee’s board of directors, material intra-entity transactions, and interchange of managerial personnel.</span></p>
        <p><span style={styles.bold}>c. Despite holding 25 percent of Bravo’s outstanding stock, the equity method is inappropriate absent the ability to apply significant influence. Factors indicating a lack of such influence include: an agreement whereby the owner surrenders significant rights, a concentration of the remaining ownership, and failure to gain representation on the board of directors.</span></p>
        <p><span style={styles.bold}>d. The equity method attempts to reflect the relationship between the investor and the investee in two ways. First, the investor recognizes investment income as soon as it is earned by the investee. Second, the Investment account reported by the investor is increased and decreased to indicate changes in the underlying book value of the investee.</span></p>
        <p><span style={styles.bold}>e. Criticisms of the equity method include:</span></p>
        <div style={styles.margin}>
          <p>Its emphasis on the 20-50% of voting stock in determining significant influence vs. control.</p>
          <p>Allowing off-balance sheet financing.</p>
          <p>Potential biasing of performance ratios.</p>
        </div>
        <p><span style={styles.bold}>Relative to consolidation, the equity method will report smaller amounts for assets, liabilities, revenues and expenses. However, income is typically the same as reported under consolidation. Therefore, companies that use the equity method, and avoid consolidation, often show enhanced debt-to-equity ratios, as well as ratios for returns on assets and sales.</span></p>
        <p><span style={styles.bold}>f. When an investor buys enough additional shares to gain the ability to exert significant influence, accounting for any shares previously owned is applied using the equity method on a prospective basis.</span></p>
        <p><span style={styles.bold}>g. The total fair value of the January 1, 2024, 25% investment in Bravo is compared to 25% of Bravo’s January 1, 2024 book value. Any excess payment is then assigned to specific assets and liabilities based on differences between book value and fair value. If any residual amount of the purchase price remains unexplained, it is assigned to goodwill.</span></p>
        <p><span style={styles.bold}>h. Investee dividends reduce its book value. Because the investor’s Investment account tracks the investee’s book value, Eileen records the dividend as a reduction in its investment account. This method of recording also avoids double-counting of the revenue since the investor has already recorded the amount when earned by the investee. Under the equity method, revenues are recognized when earned by the investee but not through dividends as a distribution of the same earnings.</span></p>
        <p><span style={styles.bold}>i. Eileen records the fair value of the investment in Bravo at January 1, 2024 equal to $975,000 ($585,000 plus $390,000). Next, Eileen prospectively records an equity accrual equal to 25 percent of Bravo’s 2024 income. The investment balance will be reduced by 25 percent of Bravo’s 2024 dividends. Finally, the Investment account will be decreased by any amortization expense for 2024.</span></p>
      </div><h2>Problem 23</h2><div style={styles.entry}>
        <p><span style={styles.bold}>a. An upstream transfer goes from investee to investor whereas a downstream transfer is made by the investor to the investee.</span></p>
        <p><span style={styles.bold}>b. The direction of an intra-entity transfer has no impact on reporting when the equity method is applied. The direction of the transfers was introduced in Chapter One because it does have an important impact on consolidation accounting as explained in Chapter Five.</span></p>
        <p><span style={styles.bold}>c. To determine the intra-entity gross profit when applying the equity method, the transferred inventory that remains at year’s end is multiplied by the gross profit percentage. This computation derives the gross profit. The intra-entity portion of this gross profit is found by multiplying it by the percentage of the investee that is owned by the investor.</span></p>
        <p><span style={styles.bold}>d. Parrot, as the investor, will accrue 42 percent of the income reported by Sunrise. However, this equity income will then be reduced by the amount of the investor’s share of the intra-entity gross profit. These amounts can be combined and recorded as a single entry, increasing both the Investment account and an Equity Income account. As an alternative, separate entries can be made. The equity accrual is added to these two accounts while the deferral of the intra-entity gross profit serves as a reduction.</span></p>
        <p><span style={styles.bold}>e. In the second year, Parrot again records an equity accrual for 42 percent of the income reported by Sunrise. The intra-entity portion gross profit created by the transfers for that year are delayed in the same manner as for 2023 in (d) above. However, for 2024, the gross profit deferred from 2023 must now be recognized. This transferred merchandise was sold during this second year so that the earnings process has now been culminated.</span></p>
        <p><span style={styles.bold}>f. If none of the transferred merchandise remains at year-end, the intra-entity transactions create no impact on the recording of the investment when applying the equity method. No gross profit remains unrecognized.</span></p>
        <p><span style={styles.bold}>g. The intra-entity transfers create no direct effects for Sunrise, the investee. However, as related party transactions, the amounts, as well as the relationship, must be properly disclosed and labeled.</span></p>
      </div><h2>Problem 24</h2><div style={styles.entry}>
        <p><span style={styles.bold}>a. The equity method must be applied up to the date of the sale. Therefore, for the current year until August 1, Einstein records an equity accrual recognizing 40 percent of Brooks’ reported income for that period. In addition, Einstein records any dividends declared by Brooks as a reduction in the carrying amount of the investment account. Finally, amortization of acquisition-date excess fair over book values are recorded through August 1. These entries establish an appropriate book value as of the date of sale. Then, an amount of that book value equal to the portion of the shares sold is removed to compute a gain or loss on sale.</span></p>
        <p><span style={styles.bold}>b. Subsequent accounting for the remaining shares depends on the influence retained post-sale. If Einstein maintains the ability to apply significant influence to the operating and financial decisions of Brooks, the equity method is still applicable based on the smaller new ownership percentage. However, if significant influence has been lost, Einstein should report the remaining shares by means of the fair-value method.</span></p>
        <p><span style={styles.bold}>c. In this situation, several figures would be reported by Einstein. First, an equity income balance is recorded that includes both the accrual and amortization prior to August 1. Second, a gain or loss should be shown for the sale of the shares. Third, any change in the 2 percent investment fair value since August 1 along with 2 percent of investee dividends declared after August 1 must be included in Einstein’s investment income for the current year.</span></p>
        <p><span style={styles.bold}>d. No, the ability to apply significant influence to the investee was present prior to August 1 so that the equity method was appropriate. No change is made in those figures. However, after the sale, the remaining investment must be accounted for by means of the fair-value method.</span></p>
        </div>
        <h2>Problem 25</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>a. Equity income accrual—2024 ($90,000 × 30%): $27,000</span></p>
        <p><span style={styles.bold}>Amortization—2024 (given): ($9,000)</span></p>
        <p><span style={styles.bold}>Intra-entity profit recognized on 2023 transfer*: $1,200</span></p>
        <p><span style={styles.bold}>Intra-entity profit deferred on 2024 transfer**: ($2,640)</span></p>
        <p><span style={styles.bold}>Equity income recognized by Matthew in 2024: $16,560</span></p>
        <p><span style={styles.bold}>*Gross profit rate (GPR) on 2023 transfer ($16,000/$40,000): 40%</span></p>
        <p><span style={styles.bold}>Intra-entity gross profit:</span></p>
        <div style={styles.margin}>
          <p>Remaining inventory ($40,000 × 25%): $10,000</p>
          <p>GPR (above): × 40%</p>
          <p>Ownership percentage: × 30%</p>
          <p>Intra-entity profit deferred from 2023 until 2024: $1,200</p>
        </div>
        <p><span style={styles.bold}>**GPR on 2024 transfer ($22,000/$50,000): 44%</span></p>
        <p><span style={styles.bold}>Intra-entity gross profit:</span></p>
        <div style={styles.margin}>
          <p>Remaining inventory ($50,000 × 40%): $20,000</p>
          <p>GPR (above): × 44%</p>
          <p>Ownership percentage: × 30%</p>
          <p>Intra-entity profit deferred from 2024 until 2025: $2,640</p>
        </div>
        <p><span style={styles.bold}>b. Investment in Lindman, 1/1/24: $335,000</span></p>
        <p><span style={styles.bold}>Equity income—2024 (see [a] above): $16,560</span></p>
        <p><span style={styles.bold}>Dividends—2024 ($30,000 × 30%): ($9,000)</span></p>
        <p><span style={styles.bold}>Investment in Lindman, 12/31/24: $342,560</span></p>
      </div>

      <h2>Problem 26</h2>
      <div style={styles.entry}>
        <p><span style={styles.bold}>Part a</span></p>
        <p><span style={styles.bold}>Allocation and annual amortization—12/31/23</span></p>
        <div style={styles.margin}>
          <p>Purchase price of 25% interest: $95,000</p>
          <p>Carrying amount of 5% interest (5% × $380,000): $19,000</p>
          <p>Total fair value of Akron’s investment in Zip: $114,000</p>
          <p>Net book value ($290,000 × 30%): ($87,000)</p>
          <p>Franchise agreements: $27,000</p>
          <p>Remaining life of franchise agreements: ÷ 10 years</p>
          <p>Annual amortization: $2,700</p>
        </div>
        <p><span style={styles.bold}>1. Equity Income—2024</span></p>
        <div style={styles.margin}>
          <p>2024 basic equity income accrual ($88,000 × 30%): $26,400</p>
          <p>2024 amortization (above): ($2,700)</p>
          <p>Equity income—2024: $23,700</p>
        </div>
        <p><span style={styles.bold}>2. Investment in Zip account</span></p>
        <div style={styles.margin}>
          <p>December 31, 2023 total fair value: $114,000</p>
          <p>2024 basic equity income (above): $23,700</p>
          <p>2024 dividends ($15,000 × 30%): ($4,500)</p>
          <p>Investment in Zip—December 31, 2024: $133,200</p>
        </div>
        <p><span style={styles.bold}>Part b</span></p>
        <p><span style={styles.bold}>1. Dividend income (30% × $15,000): $4,500</span></p>
        <p><span style={styles.bold}>Increase in fair value (30% × [$480,000 - $380,000]): $30,000</span></p>
        <p><span style={styles.bold}>Total reported income from Investment in Zip: $34,500</span></p>
        <p><span style={styles.bold}>2. Investment in Zip (30% × $480,000): $144,000</span></p>
      </div>
      </div>
  );
};

