import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Loader() {
    return (
        <div className="loader w-[100%]">
            <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={90} height={90} />
                <Skeleton variant="rectangular" width={660} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
            <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={90} height={90} />
                <Skeleton variant="rectangular" width={660} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
            <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={90} height={90} />
                <Skeleton variant="rectangular" width={660} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
            <Stack spacing={1}>
                {/* For variant="text", adjust the height via font-size */}
                <Skeleton variant="text" sx={{ fontSize: '1rem' }} />
                {/* For other variants, adjust the size with `width` and `height` */}
                <Skeleton variant="circular" width={90} height={90} />
                <Skeleton variant="rectangular" width={660} height={60} />
                <Skeleton variant="rounded" width={210} height={60} />
            </Stack>
        </div>
    );
}