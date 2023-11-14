<?php

namespace Sidtechno\Customlogin\Serializer;

use Flarum\Api\Serializer\AbstractSerializer;
use Sidtechno\Customlogin\Model\Points;

class PointsSerializer extends AbstractSerializer
{
    protected $type = 'points';

    protected function getDefaultAttributes($model)
    {

            return [
                'post_id'       => $model->post_id,
                'point_reason'  => $model->point_reason,
                'points'        => $model->points,
            ];

    }

    public function collection($models)
    {
        // Convert the Eloquent collection to a PHP array
        $modelsArray = $models->toArray();

        // Use array_map on the PHP array
        return array_map([$this, 'getDefaultAttributes'], $modelsArray);
    }
}
