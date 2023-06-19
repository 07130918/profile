import { useBreakpointValue } from '@chakra-ui/react';
import type { StackDirection } from '@chakra-ui/react';

const useResponsive = () => {
    const h = useBreakpointValue({ md: '90hv' });
    const mb = useBreakpointValue({ base: 3, md: 0 });
    const w = useBreakpointValue({ base: '100%', md: '75%' });
    const p = useBreakpointValue({ base: 2, md: 6 });
    const pSmall = useBreakpointValue({ base: 1, md: 2 });
    const px = useBreakpointValue({ base: 2, md: 8 });
    const py = useBreakpointValue({ base: 2, md: 4 });
    const ml = useBreakpointValue({ base: 0, md: 8 });
    const mBase = useBreakpointValue({ base: 3, md: 0 });
    const dRowBase = useBreakpointValue<StackDirection>({ base: 'row', md: 'column' });
    const dColumnBase = useBreakpointValue<StackDirection>({ base: 'column', sm: 'row' });

    const imageSize = useBreakpointValue({ base: '60px', md: '60' });

    return { h, mb, w, p, pSmall, px, py, ml, mBase, imageSize, dRowBase, dColumnBase };
};

export default useResponsive;
