import type { StackDirection } from '@chakra-ui/react';
import { useBreakpointValue } from '@chakra-ui/react';

const useResponsive = () => {
    const h = useBreakpointValue({ md: '90hv' });
    const mb = useBreakpointValue({ base: 3, md: 0 });
    const w = useBreakpointValue({ base: '100%', md: '75%' });
    const p = useBreakpointValue({ base: 2, md: 6 });
    const p12 = useBreakpointValue({ base: 1, md: 2 });
    const px = useBreakpointValue({ base: 2, md: 8 });
    const py = useBreakpointValue({ base: 2, md: 4 });
    const py03 = useBreakpointValue({ base: 0, md: 3 });
    const ml = useBreakpointValue({ base: 0, md: 8 });
    const ml30 = useBreakpointValue({ base: 3, md: 0 });
    const dRowBase = useBreakpointValue<StackDirection>({ base: 'row', md: 'column' });
    const dColumnBase = useBreakpointValue<StackDirection>({ base: 'column', sm: 'row' });
    const fs = useBreakpointValue({ base: 'md', md: 'lg' });
    const imageSize = useBreakpointValue({ base: '60px', md: '60' });

    return { h, mb, w, p, p12, px, py, py03, ml, ml30, imageSize, dRowBase, dColumnBase, fs };
};

export default useResponsive;
