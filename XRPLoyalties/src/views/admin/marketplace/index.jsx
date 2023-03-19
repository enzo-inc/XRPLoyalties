/*!
  _   _  ___  ____  ___ ________  _   _   _   _ ___   
 | | | |/ _ \|  _ \|_ _|__  / _ \| \ | | | | | |_ _| 
 | |_| | | | | |_) || |  / / | | |  \| | | | | || | 
 |  _  | |_| |  _ < | | / /| |_| | |\  | | |_| || |
 |_| |_|\___/|_| \_\___/____\___/|_| \_|  \___/|___|
                                                                                                                                                                                                                                                                                                                                       
=========================================================
* Horizon UI - v1.1.0
=========================================================

* Product Page: https://www.horizon-ui.com/
* Copyright 2022 Horizon UI (https://www.horizon-ui.com/)

* Designed and Coded by Simmmple

=========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

*/

import React from "react";

// Chakra imports
import {
  Box,
  Button,
  Flex,
  Grid,
  Link,
  Text,
  useColorModeValue,
  SimpleGrid,
} from "@chakra-ui/react";

// Custom components
import Banner from "views/admin/marketplace/components/Banner";
import TableTopCreators from "views/admin/marketplace/components/TableTopCreators";
import HistoryItem from "views/admin/marketplace/components/HistoryItem";
import NFT from "components/card/NFT";
import Card from "components/card/Card.js";

// Assets
import Nft1 from "assets/img/nfts/Nft1.png";
import Nft2 from "assets/img/nfts/Nft2.png";
import Nft3 from "assets/img/nfts/Nft3.png";
import Nft4 from "assets/img/nfts/Nft4.png";
import Nft5 from "assets/img/nfts/Nft5.png";
import Nft6 from "assets/img/nfts/Nft6.png";
import Avatar1 from "assets/img/avatars/avatar1.png";
import Avatar2 from "assets/img/avatars/avatar2.png";
import Avatar3 from "assets/img/avatars/avatar3.png";
import Avatar4 from "assets/img/avatars/avatar4.png";
import tableDataTopCreators from "views/admin/marketplace/variables/tableDataTopCreators.json";
import { tableColumnsTopCreators } from "views/admin/marketplace/variables/tableColumnsTopCreators";

export default function Marketplace() {
  // Chakra Color Mode
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const textColorBrand = useColorModeValue("brand.500", "white");
  return (
    <Box pt={{ base: "180px", md: "80px", xl: "80px" }}>
      {/* Main Fields */}
      <Grid
        mb='20px'
        gridTemplateColumns={{ xl: "repeat(3, 1fr)", "2xl": "1fr 0.46fr" }}
        gap={{ base: "20px", xl: "20px" }}
        display={{ base: "block", xl: "grid" }}>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 1 / 2 / 3", "2xl": "1 / 1 / 2 / 2" }}>
          <Banner />
          <Flex direction='column'>
            <Flex
              mt='45px'
              mb='20px'
              justifyContent='space-between'
              direction={{ base: "column", md: "row" }}
              align={{ base: "start", md: "center" }}>
              <Text color={textColor} fontSize='2xl' ms='24px' fontWeight='700'>
                Your songs:
              </Text>
            </Flex>
            <SimpleGrid columns={{ base: 1, md: 3 }} gap='20px'>
              <NFT
                name='I Love Paris'
                author='Featured artists'
                bidders={[
                  Avatar1
                ]}
                image={Nft1}
                currentbid='100K'
                download='#'
              />
              <NFT
                name='I Love London'
                author='Featured artists'
                bidders={[
                  Avatar1,
                  Avatar2,
                ]}
                image={Nft2}
                currentbid='80K'
                download='#'
              />
              <NFT
                name='Weekly Vibes '
                author='Featured artists'
                bidders={[
                  Avatar1,
                ]}
                image={Nft3}
                currentbid='60K'
                download='#'
              />

            <NFT
                name='Pick up the trash'
                author='Featured artists'
                bidders={[
                  Avatar1,
                  Avatar4,
  
                ]}
                image={Nft3}
                currentbid='110K'
                download='#'
              />

            <NFT
                name='Colorful Heaven'
                author='Featured artists'
                bidders={[
                  Avatar1,
  
                ]}
                image={Nft3}
                currentbid='50K'
                download='#'
              />

              <NFT
                name='Beautiful Christmas '
                author='Featured artists'
                bidders={[
                  Avatar1,
                  Avatar3,
                  Avatar4,
                  Avatar1,
                ]}
                image={Nft3}
                currentbid='40K'
                download='#'
              />
            </SimpleGrid>
            <Text
              mt='45px'
              mb='36px'
              color={textColor}
              fontSize='2xl'
              ms='24px'
              fontWeight='700'>
              Featured in:
            </Text>
            <SimpleGrid
              columns={{ base: 1, md: 3 }}
              gap='20px'
              mb={{ base: "20px", xl: "0px" }}>
              <NFT
                name='Living the best life'
                author='Featured artists'
                bidders={[
                  Avatar4,
                  Avatar3,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                  Avatar1,
                ]}
                image={Nft4}
                currentbid='30K'
                download='#'
              />
              <NFT
                name='Colorful life'
                author='Featured artists'
                bidders={[
                  Avatar2,
                  Avatar1,
                ]}
                image={Nft5}
                currentbid='80K'
                download='#'
              />
            </SimpleGrid>
          </Flex>
        </Flex>
        <Flex
          flexDirection='column'
          gridArea={{ xl: "1 / 3 / 2 / 4", "2xl": "1 / 2 / 2 / 3" }}>
          <Card px='0px' mb='20px'>
            <TableTopCreators
              tableData={tableDataTopCreators}
              columnsData={tableColumnsTopCreators}
            />
          </Card>
          <Card p='0px'>
            <Flex
              align={{ sm: "flex-start", lg: "center" }}
              justify='space-between'
              w='100%'
              px='22px'
              py='18px'>
              <Text color={textColor} fontSize='xl' fontWeight='600'>
                Previous events
              </Text>
            </Flex>

            <HistoryItem
              name='Colorful Heaven'
              author='Cafe meeting, London'
              date='50 attendees'
              image={Nft5}
              price='1m ago'
            />
            <HistoryItem
              name='Meet and Greet'
              author='Picnic in Machester'
              date='20 attendees'
              image={Nft1}
              price='2m ago'
            />
            <HistoryItem
              name='Sing and Dance'
              author='Karaoke, Paris'
              date='100 attendees'
              image={Nft2}
              price='3m ago'
            />
            <HistoryItem
              name='Wine and Pottery'
              author='Social in Paris'
              date='10 attendees'
              image={Nft4}
              price='1y ago'
            />
            <HistoryItem
              name='First meeting with fans'
              author='Fan meeting London'
              date='10 attendees'
              image={Nft3}
              price='2y ago'
            />
          </Card>
        </Flex>
      </Grid>
      {/* Delete Product */}
    </Box>
  );
}
