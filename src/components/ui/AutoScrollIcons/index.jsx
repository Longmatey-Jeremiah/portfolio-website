import { useEffect, useRef, useState } from 'react';
import { Box, Flex, Icon } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import { FaReact, FaJs, FaHtml5, FaCss3Alt, FaLaravel, FaFigma, FaVuejs, FaJira, FaGithub } from 'react-icons/fa';
import { BiLogoTypescript } from 'react-icons/bi';
import { TbBrandReactNative } from 'react-icons/tb';

const icons = [FaReact, FaJs, FaHtml5, FaCss3Alt, FaLaravel, FaFigma, FaVuejs, FaJira, BiLogoTypescript, TbBrandReactNative, FaGithub];
const duplicatedIcons = [...icons, ...icons, ...icons];

const MotionBox = motion(Box);

export const AutoScrollIcons = () => {
  const containerRef = useRef(null);
  const [width, setWidth] = useState(0);
  const controls = useAnimation();

  useEffect(() => {
    if (containerRef.current) {
      setWidth(containerRef.current.scrollWidth / 3 - 9);
      controls.start({
        x: [0, -width],
        transition: { duration: 50, ease: 'easeInOut', repeat: Infinity, repeatType: "loop", repeatDelay: 0 },
      });
    }
    return controls.stop
  }, [width, controls]);
  return (
    <Flex overflow="hidden" whiteSpace="nowrap" width="100%" maxW='1440px'>
      <MotionBox
        ref={containerRef}
        display="inline-block"
        animate={controls}
      >
        {duplicatedIcons.map((IconComponent, index) => (
          <Icon
            as={IconComponent}
            boxSize={{ base: 6, md: 12 }}
            m={4}
            color="black"
            key={index}
          />
        ))}
      </MotionBox>
    </Flex>
  );
};