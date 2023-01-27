import React from "react";
import "./About.css";
import { Title, Text, Container, Grid, Flex, Center, Image } from '@mantine/core';
import { CorpImage } from '@assets';

const ABOUT_US_TITLE = "<About Us/>";
const ABOUT_US_TEXT = "The Laurier Computing Society is the official student-run club for \
computer science enthusiasts at Wilfrid Laurier University. Our mission is to empower students \
to reach their full potential in STEM by providing a wealth of resources and opportunities for \
academic and professional development. Our organization is dedicated to creating a vibrant community of tech-savvy students \
who are passionate about learning, creating, and innovating. Our focus is to provide members \
with hands-on experience through workshops, hackathons, networking events, and guest speaker \
sessions. Whether you're a beginner or a seasoned pro, the Laurier Computing Society has \
something for everyone. Join us today and be a part of the future of technology!";

const About = () => {
  return (
    <section id="about">
        <Container size="xl" my="md">
            <Grid grow>
                <Grid.Col md={6}>
                    <Image src={CorpImage}/>
                </Grid.Col>
                <Grid.Col md={6}>
                    <Center style={{ width: '100%', height: '100%' }}>
                        <Flex
                            direction="column"
                            justify="center"
                            wrap="wrap"
                            gap="md"
                        >
                            <Title align="center" variant="gradient" order={1}>
                                {ABOUT_US_TITLE}
                            </Title>
                            <Text align="center" color="white">
                                {ABOUT_US_TEXT}
                            </Text>
                        </Flex>
                    </Center>
                </Grid.Col>
            </Grid>
        </Container>
    </section>
  );
}

export default About;